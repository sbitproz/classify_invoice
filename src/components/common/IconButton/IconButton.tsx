import React, { memo } from "react";

// Styles
import "./IconButton.scss";

interface IconButtonProps {
  testid?: string;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode | React.ReactNodeArray;
  className?: string;
}

const IconButton: React.SFC<IconButtonProps> = ({
  testid = "",
  disabled,
  children,
  onClick,
  className = "",
}) => {
  return (
    <div
      data-testid={testid}
      className={`icon-button ${
        disabled ? "icon-button--disabled" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default memo(IconButton);
