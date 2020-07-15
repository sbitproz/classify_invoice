import { DictionaryGeneric } from "../../../../interfaces/entitylnterfaces";

export interface TableColumn {
  name: string;
  width?: number;
}

export type TableColumns = DictionaryGeneric<TableColumn>;
