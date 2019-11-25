import Rating from "../components/Rating";
import { ComponentStory } from "entities";
import { SchemaTypes } from "object-editor-react";

const story: ComponentStory = {
  title: "Rating",
  props: {
    name: SchemaTypes.string({ required: true }),
  },
  component: Rating,
  initialPropValues: {
    name: "Kevin",
  },
};

export default story;
