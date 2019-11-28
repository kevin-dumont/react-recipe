import React, { ChangeEvent } from "react";
import { SchemaPrimitiveProp, EditablePrimitive } from "entities";

export interface PrimitiveEditorProps<TObject extends EditablePrimitive> {
  name: string;
  schema: SchemaPrimitiveProp;
  object?: TObject;
  onUpdateElement: (object: TObject) => void;
}

let id = 1;

const PrimitiveEditor = <T extends EditablePrimitive>({ name, schema, onUpdateElement }: PrimitiveEditorProps<T>) => {
  const fieldProps = {
    name,
    id: `${name}-${id++}`,
    type: {
      string: "text",
      boolean: "checkbox",
      number: "number",
    }[schema.type],
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      onUpdateElement(
        {
          string: e.target.value,
          boolean: e.target.checked,
          number: Number.parseInt(e.target.value),
        }[schema.type] as T,
      );
    },
  };

  return (
    <div>
      <label htmlFor={fieldProps.id}>{name}</label>
      <input {...fieldProps} />
    </div>
  );
};

export default PrimitiveEditor;
