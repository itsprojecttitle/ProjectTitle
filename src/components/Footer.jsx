import React from "react";

const Footer = () => (
    <footer className="tw-relative tw-flex tw-h-[18px] tw-w-full tw-min-h-[18px] tw-place-content-around tw-items-center tw-gap-1 tw-overflow-hidden tw-bg-primary tw-px-[6%] tw-py-0 tw-text-[8px] tw-text-white">
        <div className="tw-relative tw-flex tw-h-full tw-w-full tw-flex-col tw-gap-2" style={{ transform: "scale(0.5)", transformOrigin: "center" }}>
            <div className="tw-my-1 tw-flex tw-w-full tw-place-content-around tw-gap-3">
                <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-place-items-center tw-gap-2 max-md:tw-w-full">
                    <img
                        src="/assets/logo.png"
                        alt="logo"
                        className="tw-w-[22px]"
                    />
                    <div className="tw-text-xs">
                        London,
                        <br />
                        Great Britain,
                        <br />
                        United Kingdom
                    </div>
                </div>
                <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-2">
                    <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xs">
                        <a href="" className="footer-link">
                            About us
                        </a>
                        <a href="" className="footer-link">
                            Contacts/FAQ
                        </a>
                        <a href="" className="footer-link">
                            Studio Location’s
                        </a>
                        <a href="" className="footer-link">
                            Policy
                        </a>
                        <a href="" className="footer-link">
                            Equipment
                        </a>
                        <a href="" className="footer-link">
                            Terms & Condition
                        </a>
                    </div>
                </div>
            </div>
            <div className="tw-h-[1px] tw-w-[100%] tw-bg-white"></div>

        </div>
    </footer>
);

export default Footer;
