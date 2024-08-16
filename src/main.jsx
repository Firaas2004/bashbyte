import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignIn from "./pages/SignIn.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import DataPage from "./pages/DataPage.jsx";
import AirtimePage from "./pages/AirtimePage.jsx";
import ElectricityPage from "./pages/ElectricityPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    // errorElement: <div>404 not found</div>,
  },
  {
    path: "/DataPage",
    element: <DataPage />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/AirtimePage",
    element: <AirtimePage />,
  },
  {
    path: "/ElectricityPage",
    element: <ElectricityPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
