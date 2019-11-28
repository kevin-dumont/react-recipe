import * as React from "react";
import styled from "styled-components";

import { ComponentStory } from "entities";

import View from "./View";
import Code from "./Code";
import ObjectEditor from "./Editor/ObjectEditor";

const Container = styled.div`
  padding: 30px;
`;

const Top = styled.div`
  display: flex;
  margin: 3rem 0 1rem 0;

  div {
    flex: 1;
  }
`;

interface ContentProps {
  component: ComponentStory;
}

const Content = ({ component }: ContentProps) => {
  const [propValues, setPropValues] = React.useState(component.initialPropValues);

  return (
    <Container>
      <h1>{`${component.title} component`}</h1>

      <Top>
        <div>
          <h2>Component props</h2>
          <ObjectEditor schema={component.props} object={propValues} onUpdateElement={props => setPropValues(props)} />
        </div>
        <div>
          <h2>Component view</h2>
          <View>
            <component.component {...propValues} />
          </View>
        </div>
      </Top>

      <h2>Code</h2>
      <Code>
        <component.component {...propValues} />
      </Code>
    </Container>
  );
};

export default Content;
