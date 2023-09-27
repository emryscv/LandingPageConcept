import React from "react";
import {createRoot}  from "react-dom/client";
import App from "./app";
import "./index.css";


const dom = document.getElementById("root");
const root = createRoot(dom)
root.render(
    <App></App>
)
