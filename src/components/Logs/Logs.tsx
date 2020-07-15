import React, { useState, useEffect, useCallback } from "react";

// Own
import LogTable from "./components/LogTable/LogTable";
import LogStats from "./components/LogStats/LogStats";
import { logInitialState } from "./constants/logConstants";
import { logsService } from "./services/logsService";
import Pagination from "../common/Pagination/Pagination";
import { LogsResponse } from "./interfaces/logsStateInterfaces";
import { PageInformation } from "../common/Pagination/interfaces/paginationInterfaces";

// Styles
import "./Logs.scss";

const Logs: React.SFC = () => {
  const [logResponse, setLogResponse] = useState(logInitialState);
  const [pageInformation, setPageInformation] = useState(
    logInitialState.pagination
  );
  const [offset, setOffset] = useState(0);

  const updateLogState = useCallback((response?: LogsResponse) => {
    if (response) {
      setLogResponse(response);
      setPageInformation({ ...response.pagination });
    }
  }, []);

  useEffect(() => {
    logsService.getLogs(offset).subscribe(updateLogState);
    const subscription = logsService
      .pulseLogs(offset, logsService.requestFrequencyMS)
      .subscribe(updateLogState);

    return () => {
      subscription.unsubscribe();
    };
  }, [offset, updateLogState]);

  const handlePageChanged = (paginationInformation: PageInformation) => {
    setOffset(paginationInformation.offset);
  };

  return (
    <div data-testid="logs-container" id="logs">
      <LogStats stats={logResponse.counter} />
      <LogTable logs={logResponse.logs} />
      <Pagination
        pageInformation={pageInformation}
        onPageChanged={handlePageChanged}
      />
    </div>
  );
};

export default Logs;
