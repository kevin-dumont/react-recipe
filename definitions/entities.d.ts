declare module "entities" {
  import { ComponentType } from "react";
  import { SchemaType } from "object-editor-react";

  export interface ComponentProp {
    type: "string" | "number" | "boolean" | "array" | "object";
    required?: boolean;
  }

  export interface ComponentProps {
    [k: string]: SchemaType;
  }

  export interface ComponentStory {
    title: string;
    props: ComponentProps;
    component: ComponentType<any>;
    initialPropValues: {
      [k: string]: any;
    };
  }
}
