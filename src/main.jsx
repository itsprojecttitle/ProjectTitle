import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/tailwind-runtime.css";
import "./styles/index.css";
import applyBodyLock from "./utils/applyBodyLock.js";

applyBodyLock();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
