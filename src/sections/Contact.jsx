import React from "react";

const ContactSection = () => (
    <section className="contact-section">
        <div className="contact-inner back-anchor">
            <a className="service-detail-back" href="/#hero">
                ← &nbsp;Back
            </a>
            <div className="contact-heading">
                <p className="contact-eyebrow reveal-up">
                    <span>ProjectTitle · Creative production &amp; artist projects</span>
                </p>
                <h1 className="contact-title reveal-up">Bring an idea to life.</h1>
                <p className="contact-subtitle reveal-up">
                    ProjectTitle develops and coordinates creative projects across music and visual culture—from the first idea through production and release. Tell us what you’re working on, what you need, or what you’d like to make together.
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
                    <label className="contact-label" htmlFor="project-type">
                        What is your enquiry about?
                    </label>
                    <select
                        className="contact-input"
                        id="project-type"
                        name="project_type"
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>Select a project type</option>
                        <option>Creative direction or campaign</option>
                        <option>Artist or creative development</option>
                        <option>Video, photography or content</option>
                        <option>Event, cypher or live project</option>
                        <option>Production or project coordination</option>
                        <option>Brand partnership</option>
                        <option>Other / still exploring</option>
                    </select>
                </div>

                <div className="contact-field">
                    <label className="contact-label" htmlFor="message">
                        Tell us about it:
                    </label>
                    <textarea
                        className="contact-textarea"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="The idea, the people involved, your timeline, and the kind of support you’re looking for…"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="contact-submit">
                    Send enquiry
                </button>
            </form>
            <div className="contact-field contact-socials">
                <p className="contact-label contact-label--center">Follow ProjectTitle or send a direct message</p>
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
