import React from "react";
import { createRoot } from "react-dom/client";
import ServiceDetailApp from "./ServiceDetailApp.jsx";
import "./styles/tailwind-runtime.css";
import "./styles/index.css";
import applyBodyLock from "./utils/applyBodyLock.js";

applyBodyLock();

createRoot(document.getElementById("root")).render(<ServiceDetailApp />);
