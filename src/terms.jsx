import React from "react";
import ReactDOM from "react-dom/client";
import TermsApp from "./TermsApp.jsx";
import "./styles/tailwind-runtime.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TermsApp />
    </React.StrictMode>
);
