import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>

    <ProSidebarProvider>
      <App />
      </ProSidebarProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
