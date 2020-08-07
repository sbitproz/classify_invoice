export interface Invoice {
  id: number;
  supplier: string;
  amount: number;
  reference: string;
  due_date: string;
  date: string;
  is_open: boolean;
  error_state: 1 | 2 | 3;
  data_error: string;
}

export interface InvoiceResponse {
  suspect: Invoice[];
  error: Invoice[];
  correct: Invoice[];
}

export interface Counter {
  suspect: number;
  error: number;
  correct: number;
  [index: string]: number;
}
