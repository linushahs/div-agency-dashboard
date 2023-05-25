import { createSlice } from "@reduxjs/toolkit";
import { BusinessPayloadType, Invoice } from "./types";
import { PayloadType, ClientPayloadType } from "./types";

interface InvoiceState {
  invoices: Invoice[];
  loading: boolean;
  error: string | null;
}

const initialState: InvoiceState = {
  invoices: [
    {
      invoiceNo: 1,
      invoiceDate: "2021-10-01",
      dueDate: "One",
      customerNo: 2,

      businessInfo: {
        name: "Div Agency",
        email: "divagency@gmail.com",
        address1: "Kathmandu, Nepal",
        address2: "Street No 4252",
      },

      clientInfo: {
        name: "Div Agency",
        email: "divagency@gmail.com",
        address1: "Kathmandu, Nepal",
        address2: "Street No 4252",
      },
    },
  ],
  loading: false,
  error: null,
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    createInvoice: (state: InvoiceState, { payload }: PayloadType) => {
      state.invoices = [...state.invoices, payload.invoice];
    },
    saveClientInformation: (
      state: InvoiceState,
      { payload }: ClientPayloadType
    ) => {
      const { invoiceIndex, client } = payload;
      const invoice = state.invoices[invoiceIndex];

      // Create a copy of the invoice object with the updated clients array
      const updatedInvoice = {
        ...invoice,
        clientInfo: client,
      };

      // Create a copy of the invoices array and update the specific invoice
      const updatedInvoices = [...state.invoices];
      updatedInvoices[invoiceIndex] = updatedInvoice;

      // Update the state with the modified invoices array
      state.invoices = updatedInvoices;
    },
    saveBusinessInformation: (
      state: InvoiceState,
      { payload }: BusinessPayloadType
    ) => {
      const { invoiceIndex, business } = payload;
      const invoice = state.invoices[invoiceIndex];

      // Create a copy of the invoice object with the updated clients array
      const updatedInvoice = {
        ...invoice,
        businessInfo: business,
      };

      // Create a copy of the invoices array and update the specific invoice
      const updatedInvoices = [...state.invoices];
      updatedInvoices[invoiceIndex] = updatedInvoice;

      // Update the state with the modified invoices array
      state.invoices = updatedInvoices;
    },
  },
});

export const { createInvoice, saveClientInformation, saveBusinessInformation } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;
