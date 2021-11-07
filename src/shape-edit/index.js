import { createElement } from "react";
import ShapeLineEdit from "./line";
import ShapeRectEdit from "./rect";
import ShapeCircleEdit from "./circle";

export default function ShapeEdit(props) {
  if (!props.shape) return null;

  return createElement(
    {
      line: ShapeLineEdit,
      rect: ShapeRectEdit,
      circle: ShapeCircleEdit,
    }[props.shape],
    props
  );
}
