import * as React from "react";

import styled from "styled-components";

const ViewContainer = styled.div``;

interface CodeProps {
  children: React.ReactNode;
}

const View = ({ children }: CodeProps) => {
  return <ViewContainer>{children}</ViewContainer>;
};

export default View;
