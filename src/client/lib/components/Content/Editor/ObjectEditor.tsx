import React from "react";
import { SchemaProps, Editable, SchemaPrimitiveProp, EditableObject } from "entities";
import PrimitiveEditor from "./PrimitiveEditor";

export interface ObjectEditorProps<TObject extends EditableObject> {
  schema: SchemaProps;
  object: TObject;
  onUpdateElement: (object: TObject) => void;
}

function ObjectEditor<T extends EditableObject>({ schema, object, onUpdateElement }: ObjectEditorProps<T>) {
  const keys = Object.keys(schema);

  const onUpdatePrimitive = (name: string, value: Editable) =>
    onUpdateElement({
      ...object,
      [name]: value,
    });

  return (
    <div>
      {keys.map(key => (
        <div key={key}>
          {schema[key].type === "array" && <></>}
          {schema[key].type === "object" && <></>}
          {schema[key].type !== "array" && schema[key].type !== "object" && (
            <PrimitiveEditor
              name={key}
              schema={schema[key] as SchemaPrimitiveProp}
              onUpdateElement={v => onUpdatePrimitive(key, v)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ObjectEditor;
