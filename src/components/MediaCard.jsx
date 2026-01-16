import React from "react";

const MediaCard = ({
    title,
    description,
    image,
    video,
    href = "#",
    statusLabel = "Learn more",
    disabled = false,
    variant = "default",
    className = "",
}) => {
    const baseClass =
        variant === "inverse"
            ? "portfolio-card-inverse"
            : "tw-bg-[#f3f3f3b4]";
    const statusText = disabled
        ? statusLabel || "Launching soon"
        : statusLabel;

    return (
        <div
        className={`media-card reveal-up ${className} tw-flex tw-h-fit tw-w-[450px] tw-break-inside-avoid tw-flex-col tw-gap-2 tw-rounded-lg ${baseClass} tw-p-4 tw-shadow-lg max-lg:tw-w-full max-lg:tw-max-w-[400px] ${disabled ? "media-card--disabled" : ""}`}
    >
            <div className="tw-flex tw-place-items-center tw-gap-3">
                <div className="tw-h-[300px] tw-w-full tw-overflow-hidden tw-rounded-lg">
                    {video ? (
                        video.includes("youtube") ? (
                            <iframe
                                src={video}
                                title={title}
                                className="tw-h-full tw-w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <video
                                src={video}
                                className="tw-h-full tw-w-full tw-object-cover"
                                muted
                                loop
                                playsInline
                                autoPlay
                                preload="metadata"
                            />
                        )
                    ) : (
                        <img
                            src={image}
                            className="tw-h-full tw-w-full tw-object-cover"
                            alt={title}
                        />
                    )}
                </div>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-2">
                <h3 className="tw-text-xl tw-font-medium">{title}</h3>
                <p className={variant === "inverse" ? "" : "tw-text-gray-600"}>
                    {description}
                </p>
                <a
                    href={disabled ? undefined : href}
                    className={`tw-mt-4 tw-inline-flex tw-items-center tw-gap-2 tw-text-sm tw-font-semibold ${
                        disabled ? "tw-text-gray-400" : "tw-text-black"
                    }`}
                    aria-disabled={disabled ? "true" : "false"}
                >
                    <span>{statusText}</span>
                    {!disabled && (
                        <i className="bi bi-arrow-right tw-text-base"></i>
                    )}
                </a>
            </div>
        </div>
    );
};

export default MediaCard;
