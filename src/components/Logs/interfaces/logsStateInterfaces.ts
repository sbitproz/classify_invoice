import { PageInformation } from "../../common/Pagination/interfaces/paginationInterfaces";

export interface Logs {
  dateTime: string;
  logType: string;
  message: string;
}

export interface Counter {
  INFO: number;
  WARNING: number;
  ERROR: number;
  [index: string]: number;
}

export interface LogsResponse {
  logs: Logs[];
  pagination: PageInformation;
  counter: Counter;
}
