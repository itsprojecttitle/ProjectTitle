import React from "react";
import ReactDOM from "react-dom/client";
import MediaApp from "./MediaApp.jsx";
import "./styles/tailwind-runtime.css";
import "./styles/index.css";
import applyBodyLock from "./utils/applyBodyLock.js";

applyBodyLock();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MediaApp />
    </React.StrictMode>
);
