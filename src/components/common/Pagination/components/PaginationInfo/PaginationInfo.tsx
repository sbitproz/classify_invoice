import React, { memo } from "react";

// Own
import { PaginationProperties } from "../../interfaces/paginationInterfaces";

// Styles
import "./PaginationInfo.scss";

const PaginationInfo: React.SFC<PaginationProperties> = ({
  pageInformation,
}) => {
  const getPosition = (): number =>
    pageInformation.offset + pageInformation.count === pageInformation.total
      ? 100
      : (pageInformation.offset / pageInformation.total) * 100;

  return (
    <div data-testid="pagination-info" className="pagination-info">
      {pageInformation.total === 0
        ? "No Logs"
        : `Show ${pageInformation.offset + 1} to ${
            pageInformation.count + pageInformation.offset
          }
      of ${pageInformation.total} (${getPosition().toFixed(2)}%)`}
    </div>
  );
};

export default memo(PaginationInfo);
