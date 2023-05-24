import { createSlice } from "@reduxjs/toolkit";
import { Invoice } from "./types";

interface InvoiceState {
  invoices: Invoice[];
  loading: boolean;
  error: string | null;
}

type PayloadType = {
  payload: {
    invoice: Invoice;
  };
};

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
  },
});

export const { createInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
