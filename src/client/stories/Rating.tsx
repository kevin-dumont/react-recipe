import Rating from "../components/Rating";
import { ComponentStory } from "entities";

const story: ComponentStory = {
  title: "Rating",
  props: {
    name: { type: "string", required: true },
    toto: { type: "boolean", required: true },
  },
  component: Rating,
  initialPropValues: {
    name: "Kevin",
  },
};

export default story;
