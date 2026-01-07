import React from "react";

const Footer = () => (
    <footer className="tw-relative tw-flex tw-w-full tw-place-content-around tw-gap-3 tw-bg-primary tw-px-[10%] tw-pb-4 tw-pt-[5%] tw-text-white">
        <div className="tw-relative tw-flex tw-h-full tw-w-full tw-flex-col tw-gap-2">
            <div className="tw-my-2 tw-flex tw-w-full tw-place-content-around tw-gap-3 max-md:tw-flex-col">
                <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full">
                    <img
                        src="/assets/logo.png"
                        alt="logo"
                        className="tw-w-[150px]"
                    />
                    <div>
                        London,
                        <br />
                        Great Britain,
                        <br />
                        United Kingdom
                    </div>
                </div>
                <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-gap-4">
                    <div className="tw-flex tw-flex-col tw-gap-3 max-md:tw-text-sm">
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

            <div className="tw-mt-3 tw-flex tw-gap-4 tw-text-xl">
                <a href="" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="https://x.com/ItsProjectTitle" aria-label="X">
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://instagram.com/" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
