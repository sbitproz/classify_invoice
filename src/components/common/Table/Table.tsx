import React, { memo } from "react";

// Own
import { Dictionary } from "../../../interfaces/entitylnterfaces";
import { TableColumns } from "./interfaces/tableInterfaces";

// Styles
import "./Table.scss";

interface TableProps {
  id?: string;
  columns: TableColumns;
  data: Dictionary[];
}

const Table: React.SFC<TableProps> = ({ columns, data, id = "table" }) => {
  return (
    <table data-testid="table" id={id}>
      <thead>
        <tr>
          {Object.keys(columns).map((key) => (
            <td key={key} style={{ width: columns[key].width }}>
              {columns[key].name}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={index}>
            {Object.keys(record).map((key) => (
              <td key={key}>{record[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(Table);
