import React, { memo } from "react";

// Styles
import "./Heading.scss";

interface HeadingProps {
  headingLevel?: "h1" | "h2" | "h3";
  className?: string;
  testid?: string;
  children: React.ReactNodeArray | React.ReactNode;
}

const Heading: React.SFC<HeadingProps> = ({
  headingLevel = "h1",
  testid = "",
  className,
  children,
}) => {
  const Title = headingLevel;

  return (
    <div className={className ? className : "heading"} data-testid={testid}>
      <Title>{children}</Title>
    </div>
  );
};

export default memo(Heading);
