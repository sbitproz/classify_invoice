import { LogsResponse } from "../interfaces/logsStateInterfaces";
import { TableColumns } from "../../common/Table/interfaces/tableInterfaces";
import * as icon from "@fortawesome/free-solid-svg-icons";

export const logLimit = 20;

export const counterInitialState = {
  INFO: 0,
  WARNING: 0,
  ERROR: 0,
};

export const paginationInitialState = {
  count: 0,
  offset: 0,
  limit: logLimit,
  total: 0,
};

export const logInitialState: LogsResponse = {
  logs: [],
  pagination: paginationInitialState,
  counter: counterInitialState,
};

export const logColumns: TableColumns = {
  timeStamp: {
    name: "Date Time",
    width: 200,
  },
  type: {
    name: "Type",
    width: 130,
  },
  message: {
    name: "Message",
  },
};

export const logType = {
  INFO: "INFO",
  WARNING: "WARNING",
  ERROR: "ERROR",
};

export const logTypesMap = {
  [logType.INFO]: {
    name: "Information",
    icon: icon.faInfoCircle,
    lightColor: "#93abe4",
    darkColor: "#2758C9",
  },
  [logType.WARNING]: {
    name: "Warning",
    icon: icon.faExclamationTriangle,
    lightColor: "#C28EE0",
    darkColor: "#861EC2",
  },
  [logType.ERROR]: {
    name: "Error",
    icon: icon.faPlaneArrival,
    lightColor: "#E08E8E",
    darkColor: "#C21E1E",
  },
};
