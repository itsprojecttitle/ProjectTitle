import React, { useEffect } from "react";

const widgetConfig = {
    host: "https://projecttitle.simplybook.it",
    theme: {
        colors_accent: "#ffffff",
        colors_secondary: "#adadad",
        colors_text: "#000000",
        colors_text_secondary: "#000000",
        colors_user_message: "#bdbdbd",
        colors_agent_message: "#828282",
    },
};

const loadScriptOnce = (id, src) =>
    new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
            resolve();
            return;
        }
        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });

const loadStylesheetOnce = (id, href) => {
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
};

const BookingAIWidget = () => {
    useEffect(() => {
        loadStylesheetOnce(
            "simplybook-ai-widget-css",
            "https://widget.simplybook.it/react-chat-widget/public/app.css"
        );

        const initWidget = () => {
            if (window.__sbAIWidgetInitDone) return;
            const container = document.getElementById("sb_ai_widget");
            if (!container) return;
            window.__sbAIWidgetInitDone = true;
            if (
                document.readyState === "complete" ||
                document.readyState === "interactive"
            ) {
                document.dispatchEvent(new Event("DOMContentLoaded"));
            }
        };

        const ensureWidget = () => {
            Promise.all([
                loadScriptOnce(
                    "simplybook-ai-widget-runtime",
                    "https://widget.simplybook.it/react-chat-widget/public/runtime.js"
                ),
                loadScriptOnce(
                    "simplybook-ai-widget-app",
                    "https://widget.simplybook.it/react-chat-widget/public/app.js"
                ),
            ])
                .then(() => {
                    initWidget();
                })
                .catch(() => {
                    // ignore widget load errors
                });
        };

        ensureWidget();
    }, []);

    return (
        <section className="booking-ai-widget">
            <div
                id="sb_ai_widget"
                className="sb_ai_widget-v2"
                data-config={JSON.stringify(widgetConfig)}
            ></div>
        </section>
    );
};

export default BookingAIWidget;
