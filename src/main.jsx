import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/spacing.css";
import "./styles/animations.css";
import "./styles/responsive.css";
import "./styles/utilities.css";

import App from "./App";

import { AuthProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);