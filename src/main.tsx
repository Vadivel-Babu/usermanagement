import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NextUIProvider>
  </StrictMode>
);