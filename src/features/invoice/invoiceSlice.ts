import { createSlice } from "@reduxjs/toolkit";
import { EditItemPayload, Invoice, ItemType } from "./types";

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

      items: [
        {
          title: "Redesiging of agencyclick.com",
          description:
            "This is my project description. if the line do not filt like the sentence is to big the area will start getting bigger",
          price: 150,
        },
      ],
    },
  ],
  loading: false,
  error: null,
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    createInvoice: (state: InvoiceState, { payload }) => {
      state.invoices = [...state.invoices, payload.invoice];
    },
    saveClientInformation: (state: InvoiceState, { payload }) => {
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
    saveBusinessInformation: (state: InvoiceState, { payload }) => {
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

    editItem: <T extends ItemType>(
      state: InvoiceState,
      { payload }: EditItemPayload<T>
    ) => {
      const { invoiceIndex, itemIndex, itemKey, value } = payload;

      // Create a copy of the invoices array to avoid mutating the state directly
      const updatedInvoices = [...state.invoices];

      // Retrieve the specific invoice based on the invoiceIndex
      const invoice = updatedInvoices[invoiceIndex];

      // Retrieve the specific item based on the itemIndex within the invoice
      const updatedItem = { ...invoice.items[itemIndex] } as T;
      updatedItem[itemKey] = value;

      // Update the item within the invoice
      invoice.items[itemIndex] = updatedItem;

      // update the updatedInvoices array
      updatedInvoices[invoiceIndex] = invoice;

      state.invoices = updatedInvoices;
    },
    addItem: (state: InvoiceState, { payload }) => {
      const { invoiceIndex, item } = payload;

      // Create a copy of the invoices array to avoid mutating the state directly
      const updatedInvoices = [...state.invoices];

      // Retrieve the specific invoice based on the invoiceIndex
      const invoice = updatedInvoices[invoiceIndex];

      // Create a copy of the items array within the invoice to avoid mutating the state directly
      const updatedItems = [...invoice.items];

      // Add the new item to the items array
      updatedItems.push(item);

      // Update the items within the invoice
      invoice.items = updatedItems;

      // update the updatedInvoices array
      updatedInvoices[invoiceIndex] = invoice;

      state.invoices = updatedInvoices;
    },
  },
});

export const {
  createInvoice,
  saveClientInformation,
  saveBusinessInformation,
  editItem,
  addItem,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
