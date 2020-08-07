import * as icon from "@fortawesome/free-solid-svg-icons";

export const FIELD_ID = "id";

export const TYPE_DATE = "date";
export const TYPE_CURRENCY = "currency";
export const TYPE_BOOLEAN = "boolean";

export const tableMeta = {
  id: {
    visible: false,
    caption: "Id",
    field: "id",
    type: "number",
    width: 50,
  },
  supplier: {
    visible: true,
    caption: "Supplier",
    field: "supplier",
    type: "string",
    width: 50,
  },
  amount: {
    visible: true,
    caption: "Amount",
    field: "amount",
    type: "currency",
    width: 50,
  },
  reference: {
    visible: true,
    caption: "Reference",
    field: "reference",
    type: "string",
    width: 50,
  },
  due_date: {
    visible: true,
    caption: "Due Date",
    field: "due_date",
    type: "date",
    width: 50,
  },
  date: {
    visible: true,
    caption: "Date",
    field: "date",
    type: "date",
    width: 50,
  },
  is_open: {
    visible: true,
    caption: "Is Open",
    field: "is_open",
    type: "boolean",
    width: 50,
  },
  error_state: {
    visible: false,
    caption: "Classification",
    field: "error_state",
    type: "number",
    width: 50,
  },
  data_error: {
    caption: "Data Error",
    field: "date_error",
    visible: false,
    type: "string",
    width: 50,
  },
};

export const invoiceType = {
  suspect: "suspect",
  correct: "correct",
  error: "error",
};

export const invoiceTypesMap = {
  [invoiceType.correct]: {
    name: "Correct",
    icon: icon.faInfoCircle,
    lightColor: "#93abe4",
    darkColor: "#2758C9",
  },
  [invoiceType.suspect]: {
    name: "Suspect",
    icon: icon.faExclamationTriangle,
    lightColor: "#C28EE0",
    darkColor: "#861EC2",
  },
  [invoiceType.error]: {
    name: "Error",
    icon: icon.faPlaneArrival,
    lightColor: "#E08E8E",
    darkColor: "#C21E1E",
  },
};
