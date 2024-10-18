import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import SignInPage from "./Pages/SignInPage";

import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
const supabase = createClient(
  "https://ggonlwuwbkborocvvovp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdnb25sd3V3Ymtib3JvY3Z2b3ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4NDkxODQsImV4cCI6MjAzMDQyNTE4NH0.jmkNzsXxu2q_Kpy2J9iAtvqbWijbquswkVoRg0soqiA"
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/default",
//     element: <SignInPage />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
