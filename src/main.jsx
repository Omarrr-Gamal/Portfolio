import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "./styles/index.css";

const spaPath = new URLSearchParams(window.location.search).get("__spa");
if (spaPath) {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;
  history.replaceState(null, "", base + spaPath);
}

createRoot(document.getElementById("root")).render(<App />);

