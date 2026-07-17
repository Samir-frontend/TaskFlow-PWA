import { Toaster } from "react-hot-toast";
import { registerSW } from "virtual:pwa-register";

registerSW({
  immediate: true,
});

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./registerSW";

import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/sidebar.css";
import "./styles/dashboard.css";
import "./styles/taskcard.css";
import "./styles/form.css";
import "./styles/footer.css";
import "./styles/responsive.css";

import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <BrowserRouter>
  <App />
  <Toaster
    position="top-right"
    toastOptions={{
      duration: 3000,
      style: {
        borderRadius: "12px",
      },
    }}
  />
</BrowserRouter>
      </TaskProvider>
    </ThemeProvider>
  </React.StrictMode>
);