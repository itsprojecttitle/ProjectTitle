import React from "react";

const ArticleCard = ({ box, title, date, image, link }) => (
    <div
        className={`article-card tw-flex tw-w-[350px] tw-flex-col tw-gap-4 tw-overflow-clip tw-rounded-lg tw-p-4 max-lg:tw-w-[300px] tw-text-white${
            box === 1 ? " article-card--featured" : ""
        }`}
    >
        <div className="article-card-media">
            {link ? (
                <a href={link} target="_blank" rel="noreferrer">
                    <img
                        src={image}
                        alt={title}
                        className="tw-h-full tw-w-full tw-object-cover"
                    />
                </a>
            ) : (
                <img
                    src={image}
                    alt={title}
                    className="tw-h-full tw-w-full tw-object-cover"
                />
            )}
        </div>

        <div className="tw-flex tw-w-full tw-place-items-center tw-justify-between">
            <div>{date}</div>
            <a
                href={link || "https://www.instagram.com/projecttitle/"}
                className="btn btn--yellow tw-ml-auto"
                target="_blank"
                rel="noreferrer"
            >
                <span>Learn more</span>
                <i className="bi bi-arrow-right"></i>
            </a>
        </div>
        <div className="article-card-divider"></div>
        <h3 className="tw-mt-3 tw-text-2xl tw-font-medium max-md:tw-text-xl">
            {title}
        </h3>
    </div>
);

export default ArticleCard;
