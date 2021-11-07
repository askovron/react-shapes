import { createElement } from "react";
import ShapeLineEdit from "./line";
import ShapeRectEdit from "./rect";
import ShapeCircleEdit from "./circle";
import { ShapeProps } from "../shape-defaults";

export default function ShapeEdit(props: ShapeProps) {
  if (!props.shape) return <></>;

  return createElement(
    {
      line: ShapeLineEdit,
      rect: ShapeRectEdit,
      circle: ShapeCircleEdit,
    }[props.shape] as any,
    props
  );
}
