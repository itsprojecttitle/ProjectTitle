import React from "react";

const Footer = () => (
    <footer className="site-footer">
        <div className="footer-inner">
            <div className="footer-social" aria-label="ProjectTitle social links">
                <a href="/facebook.html" aria-label="Facebook" target="_blank" rel="noreferrer">
                    <i className="bi bi-facebook"></i>
                </a>
                <a
                    href="https://www.instagram.com/projecttitle/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-instagram"></i>
                </a>
                <a
                    href="https://x.com/ItsProjectTitle"
                    aria-label="X"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a
                    href="https://www.tiktok.com/@projecttitle"
                    aria-label="TikTok"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-tiktok"></i>
                </a>
                <a
                    href="https://www.youtube.com/@ProjectTitle"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
            <div className="footer-links-row">
                <a href="" className="footer-link">
                    About us
                </a>
                <a href="" className="footer-link">
                    Contacts/FAQ
                </a>
                <a href="" className="footer-link">
                    Policy
                </a>
                <a href="/Terms.html" className="footer-link">
                    Terms & Condition
                </a>
            </div>
            <div className="footer-copy">Copyright ©2026 ProjectTitle</div>
            <div className="footer-copy">Email: itsprojecttitle@gmail.com</div>
        </div>
    </footer>
);

export default Footer;
