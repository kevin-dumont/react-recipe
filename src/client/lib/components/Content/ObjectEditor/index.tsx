import React from "react";
import { ComponentProps } from "entities";

export interface ObjectEditorProps {
  schema: ComponentProps;
  object: ComponentProps;
  onUpdateElement: string;
}

function ObjectEditor({ schema, object, onUpdateElement }: ObjectEditorProps) {
  return <div></div>;
}

export default ObjectEditor;
