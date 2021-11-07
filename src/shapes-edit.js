import { useContext } from "react";
import CanvasContext from "./canvas-context";
import ShapeEdit from "./shape-edit";

export default function ShapesEdit() {
  const { shapes } = useContext(CanvasContext);

  if (shapes.length === 0) return <p>You haven't added any shapes yet</p>;

  return [
    shapes.map(({ id, shape, ...props }) => (
      <ShapeEdit key={id} id={id} shape={shape} {...props} />
    )),
  ];
}
