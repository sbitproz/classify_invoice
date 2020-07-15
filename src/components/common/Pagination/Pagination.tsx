import React, { memo } from "react";

// Own
import { PaginationInfo } from "./components/PaginationInfo";
import { PaginationNav } from "./components/PaginationNav";
import {
  PaginationProperties,
  PageInformation,
} from "./interfaces/paginationInterfaces";

// Styles
import "./Pagination.scss";

export interface PaginationProps extends PaginationProperties {
  testId?: string;
  onPageChanged: (props: PageInformation) => void;
}

const Pagination: React.SFC<PaginationProps> = ({
  pageInformation,
  testId,
  onPageChanged,
}) => {
  const getLastPagination = () => pageInformation.total - pageInformation.limit;

  const handlePagination = (paginated: number) => {
    const protectLowerPage = paginated < 0 ? 0 : paginated;
    const protectHigherPage =
      protectLowerPage > pageInformation.total
        ? getLastPagination()
        : protectLowerPage;
    if (protectHigherPage !== pageInformation.offset) {
      onPageChanged({ ...pageInformation, offset: protectHigherPage });
    }
  };

  return (
    <div data-testid={testId} className="pagination">
      <PaginationInfo pageInformation={pageInformation} />
      <PaginationNav
        onClickFirst={() => handlePagination(0)}
        onClickPrior={() =>
          handlePagination(pageInformation.offset - pageInformation.limit)
        }
        onClickNext={() =>
          handlePagination(pageInformation.offset + pageInformation.limit)
        }
        onClickLast={() => handlePagination(getLastPagination())}
        pageInformation={pageInformation}
      />
    </div>
  );
};

export default memo(Pagination);
