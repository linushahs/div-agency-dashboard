export type Item = {
  title: string;
  description: string;
  price: number;
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

export type ClientPayloadType = {
  payload: {
    invoiceIndex: number;
    client: Client;
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
  clients: Client[];

  //   shippingAddress: string;

  //   //items
  //   items: Item[];

  //   signatureImgURL: string;
  //   sender: {
  //     name: string;
  //     label: string;
  //   };

  //   noteToClient: string;
  //   terms: string[];
}
