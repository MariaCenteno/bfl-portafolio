import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const lang = window.location.pathname.startsWith("/en") ? "en" : "es";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App lang={lang} />
  </StrictMode>,
);
