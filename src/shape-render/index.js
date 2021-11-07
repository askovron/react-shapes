import { createElement } from "react";
import ShapeLine from "./line";
import ShapeRect from "./rect";
import ShapeCircle from "./circle";

export default function Shape(props) {
  if (!props.shape) return null;

  return createElement(
    {
      line: ShapeLine,
      rect: ShapeRect,
      circle: ShapeCircle,
    }[props.shape],
    props
  );
}
