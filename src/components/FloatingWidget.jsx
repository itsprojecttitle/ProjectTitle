import React from "react";
import BookingAIWidget from "../sections/BookingAIWidget.jsx";

const FloatingWidget = () => {
    if (typeof document !== "undefined") {
        const existing = document.getElementById("sb_ai_widget");
        if (existing && !existing.closest(".floating-widget")) return null;
    }

    return (
        <div className="floating-widget">
            <BookingAIWidget />
        </div>
    );
};

export default FloatingWidget;
