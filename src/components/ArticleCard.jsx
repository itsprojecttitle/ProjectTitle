import React from "react";

const ArticleCard = ({ title, date, image }) => (
    <div className="reveal-up tw-flex tw-h-[400px] tw-w-[350px] tw-flex-col tw-gap-4 tw-overflow-clip tw-rounded-lg tw-p-4 max-lg:tw-w-[300px]">
        <div className="tw-h-[200px] tw-w-full tw-overflow-hidden">
            <img
                src={image}
                alt={title}
                className="tw-h-full tw-w-full tw-object-cover"
            />
        </div>

        <div className="tw-flex tw-w-full tw-place-items-center tw-justify-between">
            <div>{date}</div>
            <a href="" className="btn tw-ml-auto">
                <span>Learn more</span>
                <i className="bi bi-arrow-right"></i>
            </a>
        </div>
        <div className="tw-h-[2px] tw-w-full tw-bg-gray-500"></div>
        <h3 className="tw-mt-3 tw-text-2xl tw-font-medium max-md:tw-text-xl">
            {title}
        </h3>
    </div>
);

export default ArticleCard;
