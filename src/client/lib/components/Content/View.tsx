import * as React from "react";

import styled from "styled-components";

const ViewContainer = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #e3e3e3;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

interface CodeProps {
  children: React.ReactNode;
}

const View = ({ children }: CodeProps) => {
  return <ViewContainer>{children}ss</ViewContainer>;
};

export default View;
