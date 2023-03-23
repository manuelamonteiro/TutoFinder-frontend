import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";
import { AuthProvider } from "./contexts/AuthContext";
import { LogoutProvider } from "./contexts/LogoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <LogoutProvider>
        <App />
        </LogoutProvider>
    </AuthProvider>
  </React.StrictMode>
);