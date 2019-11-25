import * as React from "react";
import styled from "styled-components";

import { ComponentStory } from "entities";

import View from "./View";
import Code from "./Code";

const Container = styled.div`
  padding: 30px;
`;

interface ContentProps {
  component: ComponentStory;
}

const Content = ({ component }: ContentProps) => {
  const [propValues, setPropValues] = React.useState(component.initialPropValues);

  return (
    <Container>
      <h1>{`${component.title} component`}</h1>

      <h2>Component props</h2>

      {/* <ObjectEditor
        schema={component.props}
        object={propValues}
        onUpdateElement={(props: any) => setPropValues(props)}
      /> */}

      <h2>Component view</h2>
      <View>
        <component.component {...propValues} />
      </View>

      <h2>Code</h2>
      <Code>
        <component.component {...propValues} />
      </Code>
    </Container>
  );
};

export default Content;
