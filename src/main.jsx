import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import Contact, { loader as contactLoader } from "./routes/Contact";
import Edit, { action as editAction, } from "./routes/edit";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "/contacts/:contactId/edit",
        element: <Edit />,
        loader: contactLoader,
        action: editAction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);