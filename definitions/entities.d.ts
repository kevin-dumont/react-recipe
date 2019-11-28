declare module "entities" {
  import { ComponentType } from "react";

  export interface SchemaBaseProp {
    required?: boolean;
  }

  export interface SchemaPrimitiveProp extends SchemaBaseProp {
    type: "string" | "number" | "boolean";
  }

  export interface SchemaObjectProp extends SchemaBaseProp {
    type: "object";
    schema: {
      [key: string]: SchemaProp;
    };
  }

  export interface SchemaArrayProp extends SchemaBaseProp {
    type: "array";
    schema: SchemaProp[];
  }

  export type SchemaProp = SchemaPrimitiveProp | SchemaObjectProp | SchemaArrayProp;

  export interface SchemaProps {
    [k: string]: SchemaProp;
  }

  export type EditablePrimitive = number | string | boolean;

  export interface EditableObject {
    [key: string]: Editable;
  }

  export interface EditableArray {
    [key: number]: Editable;
  }

  export type Editable = EditablePrimitive | EditableObject | EditableArray;

  export interface ComponentStory {
    title: string;
    props: SchemaProps;
    component: ComponentType<any>;
    initialPropValues: {
      [k: string]: any;
    };
  }
}
