import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./404.tsx";
import ContactList from "./features/contact/ContactList.tsx";
import EditContact from "./features/contact/EditContact.tsx";
import InvoiceList from "./features/invoice/InvoiceList.tsx";
import CreateInvoice from "./features/invoice/CreateInvoice.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contact",
        element: <ContactList />,
      },
      {
        path: "/edit-contact",
        element: <EditContact />,
      },
      {
        path: "/invoice",
        element: <InvoiceList />,
      },
      {
        path: "/create-invoice",
        element: <CreateInvoice />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
