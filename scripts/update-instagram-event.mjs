import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(
    process.env.HOME,
    ".codex",
    "skills",
    "swissknife-backend"
);
const downloadScript = path.join(skillDir, "scripts", "ig_download_post.py");
const cacheRoot = path.join(repoRoot, ".cache", "instagram-event");
const newsDir = path.join(repoRoot, "public", "assets", "news");
const articlesFile = path.join(repoRoot, "src", "data", "articles.js");

const args = process.argv.slice(2);

const readArg = (name, fallback = "") => {
    const prefix = `${name}=`;
    const inline = args.find((arg) => arg.startsWith(prefix));
    if (inline) return inline.slice(prefix.length);
    const index = args.indexOf(name);
    if (index >= 0 && args[index + 1]) return args[index + 1];
    return fallback;
};

const hasArg = (name) => args.includes(name);

const profile = readArg("--profile", "projecttitle");
const directUrl = readArg("--url");
const titleOverride = readArg("--title");
const imageIndex = Math.max(1, Number.parseInt(readArg("--image-index", "1"), 10) || 1);
const useLogin = hasArg("--login");

const run = (cmd, cmdArgs, options = {}) => {
    const result = spawnSync(cmd, cmdArgs, {
        cwd: repoRoot,
        encoding: "utf8",
        stdio: options.stdio || ["ignore", "pipe", "pipe"],
        env: { ...process.env, ...options.env },
    });
    if (result.status !== 0) {
        const details = [result.stderr, result.stdout].filter(Boolean).join("\n");
        throw new Error(`${cmd} failed.\n${details}`);
    }
    return result.stdout.trim();
};

const preferredPython = () => {
    if (process.env.IG_PYTHON) return process.env.IG_PYTHON;
    const swissknifeDir = process.env.SWISSKNIFE_DIR || path.join(process.env.HOME, "Swissknife");
    const venvPython = path.join(swissknifeDir, "venv", "bin", "python");
    if (fs.existsSync(venvPython)) return venvPython;
    return "python3";
};

const latestPostJson = (username) => {
    const snippet = `
import json
import os
import sys
from pathlib import Path
import instaloader

username = sys.argv[1].strip().lstrip("@")
ig_user = os.environ.get("IG_USER")
ig_pass = os.environ.get("IG_PASS")
session_dir = Path(os.environ.get("IG_SESSION_DIR") or "").expanduser()

loader = instaloader.Instaloader(
    download_pictures=False,
    download_videos=False,
    save_metadata=False,
    compress_json=False,
    quiet=True,
)

if ig_user:
    session_file = session_dir / f"{ig_user}.session" if str(session_dir) else None
    if session_file and session_file.exists():
        loader.load_session_from_file(ig_user, filename=str(session_file))
    elif ig_pass:
        loader.login(ig_user, ig_pass)
        if session_file:
            session_dir.mkdir(parents=True, exist_ok=True)
            loader.save_session_to_file(str(session_file))

profile = instaloader.Profile.from_username(loader.context, username)
posts = []
for index, item in enumerate(profile.get_posts()):
    posts.append(item)
    if len(posts) >= 24:
        break

unpinned = [item for item in posts if not bool(getattr(item, "is_pinned", False))]
post = max(unpinned or posts, key=lambda item: item.date_utc)
print(json.dumps({
    "url": f"https://www.instagram.com/p/{post.shortcode}/",
    "shortcode": post.shortcode,
    "caption": post.caption or "",
    "date": post.date_utc.strftime("%b %d, %Y"),
}))
`;
    return JSON.parse(run(preferredPython(), ["-c", snippet, username]));
};

const postInfoFromUrl = (url) => {
    const match = url.match(/instagram\.com\/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/);
    if (!match) throw new Error(`Could not parse Instagram shortcode from ${url}`);
    return {
        url,
        shortcode: match[1],
        caption: "",
        date: new Intl.DateTimeFormat("en", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }).format(new Date()),
    };
};

const cleanTitle = (caption) => {
    const firstLine = (caption || "")
        .split(/\r?\n/)
        .map((line) => line.trim())
        .find((line) => line && !line.startsWith("#"));
    if (!firstLine) return "Upcoming Events";
    return firstLine.length > 86 ? `${firstLine.slice(0, 83)}...` : firstLine;
};

const jsString = (value) => JSON.stringify(value);

if (!fs.existsSync(downloadScript)) {
    throw new Error(`Swissknife download script not found at ${downloadScript}`);
}

const postInfo = directUrl ? postInfoFromUrl(directUrl) : latestPostJson(profile);
const postDir = path.join(cacheRoot, postInfo.shortcode);
fs.mkdirSync(postDir, { recursive: true });
fs.mkdirSync(newsDir, { recursive: true });

const downloadArgs = [downloadScript, postInfo.url, "--out", postDir, "--quality", "high"];
if (useLogin) downloadArgs.push("--login");

const manifest = JSON.parse(run(preferredPython(), downloadArgs, {
    env: { IG_PYTHON: preferredPython() },
}));

const imageFiles = (manifest.files || []).filter((filePath) =>
    /\.(jpe?g|png|webp)$/i.test(filePath)
);
const imageFile = imageFiles[Math.min(imageIndex - 1, imageFiles.length - 1)];

if (!imageFile) {
    throw new Error(
        "Swissknife downloaded this post, but it did not include a still image file. Use an image/carousel post URL, or add a thumbnail step for reels."
    );
}

const ext = path.extname(imageFile).toLowerCase() || ".jpg";
const publicImageName = `instagram-latest-event${ext}`;
const publicImagePath = path.join(newsDir, publicImageName);
fs.copyFileSync(imageFile, publicImagePath);

const title = titleOverride || cleanTitle(manifest.caption || postInfo.caption);
const image = `/assets/news/${publicImageName}`;
const link = postInfo.url;
const date = postInfo.date;

const content = `export const articleItems = [
    {
        box: 1,
        title: ${jsString(title)},
        date: ${jsString(date)},
        image: ${jsString(image)},
        link: ${jsString(link)},
    },
];
`;

fs.writeFileSync(articlesFile, content, "utf8");

console.log(JSON.stringify({
    updated: "src/data/articles.js",
    title,
    date,
    image,
    imageIndex: imageFiles.indexOf(imageFile) + 1,
    link,
    downloaded: manifest.files.length,
}, null, 2));
