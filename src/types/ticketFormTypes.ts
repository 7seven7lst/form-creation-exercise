export interface ITicketFormValues {
  firstName: string;
  lastName: string;
  address: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  tickets: {
    [key: string]: number;
  };
}

export interface ITicketFormErrors {
  firstName?: string;
  lastName?: string;
  address?: string;
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
  tickets?: {
    [key: string]: string;
  };
  submit?: string;
}
