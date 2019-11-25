import * as React from "react";

import { GlobalStyles } from "./styled-components";
import { Sidebar } from "./components/Sidebar";
import Content from "./components/Content";
import { ComponentStory } from "entities";

export interface AppProps {
  stories: ComponentStory[];
}

const App = ({ stories }: AppProps) => {
  const component = stories[0];

  return (
    <>
      <GlobalStyles />
      <Sidebar current={component} components={stories} />
      <Content component={component} />
    </>
  );
};

export default App;
