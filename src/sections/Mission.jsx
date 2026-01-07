import React from "react";

const Mission = () => (
    <section className="tw-relative tw-flex tw-min-h-[80vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-bg-white tw-p-6">
        <div className="tw-mt-8 tw-flex tw-flex-col tw-place-items-center tw-gap-5">
            <div className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-place-items-center tw-gap-3 tw-text-center">
                <h2 className="tw-text-4xl tw-font-semibold">
                    A mission to help Africa
                </h2>

                <a
                    href="https://buymeacoffee.com/artpaul"
                    aria-label="donate"
                    className="reveal-up tw-flex tw-h-[40px] tw-max-w-[450px] tw-place-content-center tw-place-items-center tw-gap-2 tw-bg-black tw-p-1 tw-px-4 tw-text-white"
                >
                    <span>Donate</span>
                    <i className="bi bi-heart-fill"></i>
                </a>
            </div>

            <div className="reveal-up tw-mt-6 tw-max-w-[80%] tw-place-content-center tw-border-2 tw-border-solid tw-border-black tw-p-2">
                <img
                    src="/assets/images/home/children.jpg"
                    alt="children"
                    className="tw-h-full tw-w-full tw-object-contain"
                />
            </div>
        </div>
    </section>
);

export default Mission;
