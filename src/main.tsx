import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/toaster";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);
