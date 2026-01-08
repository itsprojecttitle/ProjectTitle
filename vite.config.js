import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                fullPortfolio: "Gallery.html",
                media: "media.html",
                booking: "BookNow.html",
                newsEvents: "newsandevenrts.html",
            },
        },
    },
});
