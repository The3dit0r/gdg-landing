import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./nottailwind.css";
import "./index.css";
import { ChatContextProvider } from "./sections/ChattingSection/context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </StrictMode>
);
