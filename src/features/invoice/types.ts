export type ItemType = {
  title: string;
  description: string;
  price: number;
};

export type EditItemPayload<T> = {
  payload: {
    invoiceIndex: number;
    itemIndex: number;
    itemKey: keyof T;
    value: T[keyof T];
  };
};

export type BusinessInfo = {
  name: string;
  email: string;
  address1: string;
  address2: string;
};

export type Client = {
  name: string;
  email: string;
  address1: string;
  address2: string;
};

export type PayloadType = {
  payload: {
    invoice: Invoice;
  };
};

export interface Invoice {
  invoiceNo: number;
  invoiceDate: string;
  dueDate: string;
  customerNo: number;

  //business information
  businessInfo: BusinessInfo;

  //client information
  clientInfo: Client;

  //   shippingAddress: string;

  //items
  items: ItemType[];

  //   signatureImgURL: string;
  //   sender: {
  //     name: string;
  //     label: string;
  //   };

  //   noteToClient: string;
  //   terms: string[];
}
