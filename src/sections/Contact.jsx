import React from "react";

const ContactSection = () => (
    <section className="contact-section">
        <div className="contact-inner">
            <div className="contact-heading">
                <p className="contact-eyebrow">Any Questions/Queries?</p>
                <h1 className="contact-title">Let Us Know.</h1>
            </div>
            <form className="contact-form" method="post" action="">
                <div className="contact-field">
                    <label className="contact-label" htmlFor="firstName">
                        Name <span className="contact-required">(required)</span>
                    </label>
                    <div className="contact-grid">
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            className="contact-input"
                            required
                        />
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            className="contact-input"
                            required
                        />
                    </div>
                </div>
                <div className="contact-field">
                    <label className="contact-label" htmlFor="email">
                        Email <span className="contact-required">(required)</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="contact-input"
                        required
                    />
                </div>
                <div className="contact-field">
                    <label className="contact-label" htmlFor="subject">
                        Subject <span className="contact-required">(required)</span>
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        className="contact-input"
                        required
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select a subject
                        </option>
                        <option value="Collaborations">Collaborations</option>
                        <option value="Queries">Queries</option>
                        <option value="More">More</option>
                    </select>
                </div>
                <div className="contact-field">
                    <label className="contact-label" htmlFor="message">
                        Message <span className="contact-required">(required)</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        className="contact-textarea"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="contact-submit">
                    Submit
                </button>
            </form>
        </div>
    </section>
);

export default ContactSection;
