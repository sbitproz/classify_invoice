import styled from "styled-components";

interface LogsWrapper {
  paddingSize: string;
}

export const LogsWrapper = styled.div<LogsWrapper>`
  padding: ${({ paddingSize }) => paddingSize};
`;
