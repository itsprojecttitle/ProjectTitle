import React from "react";
import ArticleCard from "../components/ArticleCard.jsx";
import { articleItems } from "../data/articles.js";

const Articles = () => (
    <section className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-place-items-center tw-bg-white tw-p-[2%] max-lg:tw-p-3">
        <h3 className="reveal-up tw-text-center tw-text-4xl tw-font-medium max-md:tw-text-2xl">
            Portfolio & Insight
        </h3>
        <div className="reveal-up tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-10 max-lg:tw-flex-col">
            {articleItems.map((item) => (
                <ArticleCard key={item.title} {...item} />
            ))}
        </div>
    </section>
);

export default Articles;
