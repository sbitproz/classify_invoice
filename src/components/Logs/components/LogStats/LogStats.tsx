// @ts-nocheck
import React, { memo } from "react";

// Own
import { Heading } from "../../../common/Heading";
import { StatsCard } from "../../../common/StatsCard";
import { invoiceTypesMap, invoiceType } from "../../constants/invoicesConstants";
import { Counter } from "@fortawesome/fontawesome-svg-core";

// Styles
import "./LogStats.scss";

interface InvoiceStatsProps {
  stats: Counter;
  onClick: (type) => void;
}

const InvoiceStats: React.SFC<InvoiceStatsProps> = ({ stats }) => {
  const title = "Statistics";

  return (
    <>
      <Heading>{title}</Heading>
      <div className="log-stats">
        {Object.keys(invoiceType).map((key: any) => (
          <StatsCard 
            onClick={() =>onClick(key)} 
            key={key} 
            {...invoiceTypesMap[key]} 
            count={stats[key]} 
          />
        ))}
      </div>
    </>
  );
};

export default memo(InvoiceStats);
