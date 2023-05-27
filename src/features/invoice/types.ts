export interface ItemType {
  title: string;
  description: string;
  price: number;
}

export interface EditItemPayload<T> {
  payload: {
    itemIndex: number;
    itemKey: keyof T;
    value: T[keyof T];
  };
}

export interface ShippingPayloadType<T> {
  payload: {
    key: keyof T;
    value: T[keyof T];
  };
}

export interface InvoiceDetailPayload<T> {
  payload: {
    key: keyof T;
    value: T[keyof T];
  };
}

export interface BusinessInfo {
  name: string;
  email: string;
  address1: string;
  address2: string;
}

export interface Client {
  name: string;
  email: string;
  address1: string;
  address2: string;
}

export interface ShippingAddress {
  businessName: string;
  address: string;
  city: string;
  postalCode: number;
  state: string;
  country: string;
}

export interface PayloadType {
  payload: {
    invoice: Invoice;
  };
}

export interface Invoice {
  invoiceNo: number;
  invoiceDate: string;
  dueDate: string;
  customerNo: number;
  businessInfo: BusinessInfo;
  clientInfo: Client;
  shippingAddress: ShippingAddress;
  items: ItemType[];
  totalPrice: number;
  noteToClient: string;
  // signatureImgURL: string;
  sender: {
    name: string;
    label: string;
  };
  termsAndConditions: string[];
}
