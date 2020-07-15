import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

// Own
import { PaginationProperties } from "../../interfaces/paginationInterfaces";
import { IconButton } from "../../../IconButton";

// Styles
import "./PaginationNav.scss";

export interface PaginationInfoProps extends PaginationProperties {
  onClickFirst: () => void;
  onClickPrior: () => void;
  onClickNext: () => void;
  onClickLast: () => void;
}

const PaginationNav: React.SFC<PaginationInfoProps> = ({
  pageInformation,
  onClickFirst,
  onClickPrior,
  onClickNext,
  onClickLast,
}) => {
  const isFirstRecord = (): boolean => pageInformation.offset === 0;
  const isLastRecord = (): boolean =>
    pageInformation.offset + pageInformation.count >= pageInformation.total;

  return (
    <div data-testid="pagination-nav" className="pagination-nav">
      <IconButton
        testid="pagination-nav-first"
        disabled={isFirstRecord()}
        onClick={onClickFirst}
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </IconButton>

      <IconButton
        testid="pagination-nav-prior"
        disabled={isFirstRecord()}
        onClick={onClickPrior}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </IconButton>

      <IconButton
        testid="pagination-nav-next"
        disabled={isLastRecord()}
        onClick={onClickNext}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </IconButton>

      <IconButton
        testid="pagination-nav-last"
        disabled={isLastRecord()}
        onClick={onClickLast}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </IconButton>
    </div>
  );
};

export default memo(PaginationNav);
