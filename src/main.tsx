import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NoteProvider from "./context/NoteContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <App />
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
