import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import "./StatsCard.scss";

interface StatsCardProps {
  name: string;
  count: number;
  darkColor: string;
  lightColor: string;
  icon: any;
}

const StatsCard: React.SFC<StatsCardProps> = ({
  name,
  count,
  darkColor,
  lightColor,
  icon,
}) => {
  return (
    <div
      data-testid="stats-card"
      className="stats-card"
      style={{ backgroundColor: darkColor }}
    >
      <div className="stats-card__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div
        data-testid="stats-card-text"
        className="stats-card__text"
        style={{ backgroundColor: lightColor }}
      >
        <div className="stats-card__count">{count}</div>
        <div className="stats-card__type">{name}</div>
      </div>
    </div>
  );
};

export default memo(StatsCard);
