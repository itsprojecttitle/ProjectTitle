import React from "react";

const MediaCard = ({
    title,
    description,
    image,
    variant = "default",
    className = "",
}) => {
    const baseClass =
        variant === "inverse"
            ? "portfolio-card-inverse"
            : "tw-bg-[#f3f3f3b4]";

    return (
        <div
            className={`reveal-up ${className} tw-flex tw-h-fit tw-w-[450px] tw-break-inside-avoid tw-flex-col tw-gap-2 tw-rounded-lg ${baseClass} tw-p-4 tw-shadow-lg max-lg:tw-w-full max-lg:tw-max-w-[400px]`}
        >
            <div className="tw-flex tw-place-items-center tw-gap-3">
                <div className="tw-h-[300px] tw-w-full tw-overflow-hidden tw-rounded-lg">
                    <img
                        src={image}
                        className="tw-h-full tw-w-full tw-object-cover"
                        alt={title}
                    />
                </div>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-2">
                <h3 className="tw-text-xl tw-font-medium">{title}</h3>
                <p className={variant === "inverse" ? "" : "tw-text-gray-600"}>
                    {description}
                </p>
                <a href="http://" className="tw-mt-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    );
};

export default MediaCard;
