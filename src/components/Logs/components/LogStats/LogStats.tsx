import React, { memo } from "react";

// Own
import { Heading } from "../../../common/Heading";
import { StatsCard } from "../../../common/StatsCard";
import { logTypesMap, logType } from "../../constants//logConstants";
import { Counter } from "../../interfaces/logsStateInterfaces";

// Styles
import "./LogStats.scss";

interface LogStatsProps {
  stats: Counter;
}

const LogStats: React.SFC<LogStatsProps> = ({ stats }) => {
  const title = "Statistics";

  return (
    <>
      <Heading>{title}</Heading>
      <div data-testid="log-stats-container" className="log-stats">
        {Object.keys(logType).map((key) => (
          <StatsCard key={key} {...logTypesMap[key]} count={stats[key]} />
        ))}
      </div>
    </>
  );
};

export default memo(LogStats);
