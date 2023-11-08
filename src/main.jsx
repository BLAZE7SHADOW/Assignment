import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"

import App from "./App";
import { ApiContextProvider } from "./contexts/apiContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </StrictMode>
);
