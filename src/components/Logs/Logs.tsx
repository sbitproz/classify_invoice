import React, { useEffect, useCallback } from "react";

// Own
import { logsService } from "./services/logsService";

// Styles
import "./Logs.scss";

const Logs: React.SFC = () => {
  const updateLogState = useCallback((response?: any) => {}, []);

  useEffect(() => {
    logsService.getLogs().subscribe(updateLogState);
  }, [updateLogState]);

  return <div id="logs"></div>;
};

export default Logs;
