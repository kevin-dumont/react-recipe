import * as React from "react";

interface RatingProps {
  name: string;
}

const Rating = ({ name }: RatingProps) => {
  return <>Hello {name}</>;
};

export default Rating;
