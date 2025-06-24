import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ScrollToTop from "react-scroll-to-top"; // ✅ default import
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/Theme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <ScrollToTop
        smooth
        color="white"
        style={{
          backgroundColor: "#3882F6", // ✅ corrected
          display: "flex", // ✅ corrected
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </ThemeProvider>
  </StrictMode>
);
