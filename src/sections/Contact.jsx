import React from "react";

const ContactSection = () => (
    <section className="contact-section">
        <div className="contact-inner back-anchor">
            <a className="service-detail-back" href="/#hero">
                ← &nbsp;Back
            </a>
            <div className="contact-heading">
                <p className="contact-eyebrow reveal-up">
                    <span>Collaborate ?</span>
                    <span>Question ?</span>
                    <span>Call ?</span>
                </p>
                <h1 className="contact-title reveal-up">Leave a Message.</h1>
                <p className="contact-subtitle reveal-up">
                    We aim to get back to you within 24 Hours.
                </p>
            </div>
            <form
                className="contact-form reveal-up"
                action="https://formspree.io/f/xkooojlw"
                method="POST"
            >
                <div className="contact-field">
                    <label className="contact-label" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="contact-input"
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>

                <div className="contact-field">
                    <label className="contact-label" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="contact-input"
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>

                <div className="contact-field">
                    <label className="contact-label" htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        className="contact-textarea"
                        id="message"
                        name="message"
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="contact-submit">
                    Send Message
                </button>
            </form>
            <div className="contact-field contact-socials">
                <p className="contact-label contact-label--center">Or contact us at</p>
                <div className="contact-socials-center">
                    <div className="social-float contact-social-float">
                        <a href="/facebook.html" aria-label="Facebook" target="_blank" rel="noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/projecttitle/" aria-label="Instagram" target="_blank" rel="noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://x.com/ItsProjectTitle" aria-label="X" target="_blank" rel="noreferrer">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="https://www.tiktok.com/@projecttitle" aria-label="TikTok" target="_blank" rel="noreferrer">
                            <i className="bi bi-tiktok"></i>
                        </a>
                        <a href="https://www.youtube.com/@ProjectTitle" aria-label="YouTube" target="_blank" rel="noreferrer">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;
