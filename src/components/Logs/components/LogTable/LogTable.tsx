import React, { memo } from "react";

// Own
import { Heading } from "../../../common/Heading";
import { Table } from "../../../common/Table";
import { logColumns } from "../../constants/logConstants";
import { Logs } from "../../interfaces/logsStateInterfaces";

// Styles
import "./LogTable.scss";

interface LogTableProps {
  logs: Logs[];
}

const LogTable: React.SFC<LogTableProps> = ({ logs }) => {
  return (
    <div data-testid="log-table-container" id="logTable">
      <Heading>Logs</Heading>
      <Table columns={logColumns} data={logs} />
    </div>
  );
};

export default memo(LogTable);
