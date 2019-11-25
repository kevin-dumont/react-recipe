import * as React from "react";
import jsxToString from "jsx-to-string";

import styled from "styled-components";

const Pre = styled.pre`
  border-radius: 6px;
  background: #000;
  color: #fff;
  padding: 10px 20px;
`;

interface CodeProps {
  children: React.ReactNode;
}

const Code = ({ children }: CodeProps) => {
  return <Pre>{jsxToString(children)}</Pre>;
};

export default Code;
