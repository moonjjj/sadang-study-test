import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@olaf-design-ui/ui/design-system.scss";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
