import React from "react";
import { createRoot } from "react-dom/client";
import ServicePackagesApp from "./ServicePackagesApp.jsx";
import "./styles/tailwind-runtime.css";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(<ServicePackagesApp />);
