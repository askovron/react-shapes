import { createElement } from "react";
import ShapeLine from "./line";
import ShapeRect from "./rect";
import ShapeCircle from "./circle";
import { ShapeProps } from "../shape-defaults";

export default function Shape(props: ShapeProps) {
  if (!props.shape) return null;

  return createElement(
    {
      line: ShapeLine,
      rect: ShapeRect,
      circle: ShapeCircle,
    }[props.shape] as any,
    props
  );
}
