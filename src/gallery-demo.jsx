import React from "react";
import ReactDOM from "react-dom/client";
import GalleryDemoApp from "./GalleryDemoApp.jsx";
import "./styles/tailwind-runtime.css";
import "./styles/index.css";
import "./styles/gallery-demo.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GalleryDemoApp />
    </React.StrictMode>
);
