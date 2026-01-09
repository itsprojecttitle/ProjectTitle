import React from "react";
import ArticleCard from "../components/ArticleCard.jsx";
import { articleItems } from "../data/articles.js";

const Articles = () => (
    <section className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-place-items-center tw-bg-black tw-text-white tw-p-[2%] max-lg:tw-p-3">
        <h3 id="news" className="tw-text-center tw-text-4xl tw-font-medium max-md:tw-text-2xl">
            News
        </h3>
        <div className="news-carousel" aria-label="News carousel">
            <div className="news-carousel-track">
                {articleItems.map((item) => (
                    <ArticleCard key={item.title} {...item} />
                ))}
            </div>
        </div>
    </section>
);

export default Articles;
