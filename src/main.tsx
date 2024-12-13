import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store.tsx";
import { BrowserRouter } from "react-router-dom";
import Appcontext from "./context/AppContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Appcontext>
            <App />
          </Appcontext>
        </BrowserRouter>
      </Provider>
    </NextUIProvider>
  </StrictMode>
);
