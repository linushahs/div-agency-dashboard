import { createSlice } from "@reduxjs/toolkit";
import {
  EditItemPayload,
  Invoice,
  InvoiceDetailPayload,
  ItemType,
  ShippingAddress,
  ShippingPayloadType,
} from "./types";

interface InvoiceState {
  invoice: Invoice;
  loading: boolean;
  error: string | null;
}

const initialState: InvoiceState = {
  invoice: {
    invoiceNo: 1,
    invoiceDate: "2021-10-01",
    dueDate: "2023-09-05",
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

    shippingAddress: {
      businessName: "",
      address: "",
      city: "",
      postalCode: 0,
      state: "",
      country: "",
    },

    totalPrice: 150,
    noteToClient: "",

    sender: {
      name: "Katherine Zeta Jones",
      label: "Co-founder Hencework",
    },

    termsAndConditions: [
      "Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.",
      "Please quote invoice number when remitting funds.",
    ],
  },

  loading: false,
  error: null,
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    saveInvoiceDetails: <T extends Invoice>(
      state: InvoiceState,
      { payload }: InvoiceDetailPayload<T>
    ) => {
      const { key, value } = payload;

      // Retrieve the specific invoice based on the invoiceIndex
      const updatedInvoice = state.invoice;

      // Update the value of the specified key in the shippingAddress object
      (updatedInvoice as T)[key] = value;

      // Update the state with the new invoices array
      state.invoice = updatedInvoice;
    },
    editInvoice: <T extends Invoice>(
      state: InvoiceState,
      { payload }: InvoiceDetailPayload<T>
    ) => {
      const { key, value } = payload;

      (state.invoice as T)[key] = value;
    },
    editSenderDetails: <T extends { name: string; label: string }>(
      state: InvoiceState,
      { payload }: InvoiceDetailPayload<T>
    ) => {
      const { key, value } = payload;

      // Retrieve the specific invoice based on the invoiceIndex
      const updatedInvoice = state.invoice;

      // Update the value of the specified key in the shippingAddress object
      (updatedInvoice.sender as T)[key] = value;

      // Update the state with the new invoices array
      state.invoice = updatedInvoice;
    },
    editShippingDetails: <T extends ShippingAddress>(
      state: InvoiceState,
      { payload }: ShippingPayloadType<T>
    ) => {
      const { key, value } = payload;

      // Retrieve the specific invoice based on the invoiceIndex
      const updatedInvoice = state.invoice;

      // Update the value of the specified key in the shippingAddress object
      (updatedInvoice.shippingAddress as T)[key] = value;

      // Update the state with the new invoices array
      state.invoice = updatedInvoice;
    },

    editItem: <T extends ItemType>(
      state: InvoiceState,
      { payload }: EditItemPayload<T>
    ) => {
      const { itemIndex, itemKey, value } = payload;

      // Retrieve the specific invoice based on the invoiceIndex
      const updatedInvoice = state.invoice;

      // Retrieve the specific item based on the itemIndex within the invoice
      const updatedItem = { ...updatedInvoice.items[itemIndex] } as T;
      updatedItem[itemKey] = value;

      // Update the item within the invoice
      updatedInvoice.items[itemIndex] = updatedItem;

      // Check if the changed key is price
      if (itemKey === "price") {
        // Update the totalPrice property on the invoice object
        updatedInvoice.totalPrice = updatedInvoice.items.reduce(
          (acc, item) => acc + Number(item.price),
          0
        );
      }

      state.invoice = updatedInvoice;
    },
    addItem: (state: InvoiceState, { payload }) => {
      const { item } = payload;

      // Retrieve the specific invoice based on the invoiceIndex
      const updatedInvoice = state.invoice;

      // Update the items within the invoice
      updatedInvoice.items.push(item);

      state.invoice = updatedInvoice;
    },
    removeItem: (state: InvoiceState, { payload }) => {
      const { itemIndex } = payload;

      // Retrieve the specific invoice based on the invoiceIndex
      const updatedInvoice = state.invoice;

      // Remove the item from the items array
      updatedInvoice.items.splice(itemIndex, 1);

      // Update the totalPrice property on the invoice object
      updatedInvoice.totalPrice = updatedInvoice.items.reduce(
        (acc, item) => acc + Number(item.price),
        0
      );

      state.invoice = updatedInvoice;
    },

    editTermsAndCondition: <T extends string[]>(
      state: InvoiceState,
      { payload }: { payload: { index: number; value: string } }
    ) => {
      const { index, value } = payload;

      // Retrieve the specific invoice based on the invoiceIndex
      const updatedInvoice = state.invoice;

      // update the terms and conditions
      (updatedInvoice.termsAndConditions as T)[index] = value;

      state.invoice = updatedInvoice;
    },
    addTermsAndCondition: (state: InvoiceState, { payload }) => {
      const { term } = payload;

      // Retrieve the specific invoice based on the invoiceIndex
      const updatedInvoice = state.invoice;

      //check if the last term is empty or not
      const len = updatedInvoice.termsAndConditions.length;
      if (updatedInvoice.termsAndConditions[len - 1] !== "") {
        //update the terms and condition array
        updatedInvoice.termsAndConditions.push(term);
      }

      state.invoice = updatedInvoice;
    },
    removeTermsAndCondition: (state: InvoiceState, { payload }) => {
      const { index } = payload;

      // Retrieve the specific invoice based on the invoiceIndex
      const updatedInvoice = state.invoice;

      // Remove the terms from the termsAndCondition array
      updatedInvoice.termsAndConditions.splice(index, 1);

      state.invoice = updatedInvoice;
    },
  },
});

//actions creator
export const {
  editInvoice,
  saveInvoiceDetails,
  editShippingDetails,
  editSenderDetails,
  editItem,
  addItem,
  removeItem,
  addTermsAndCondition,
  editTermsAndCondition,
  removeTermsAndCondition,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
