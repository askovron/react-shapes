import { useContext } from "react";
import CanvasContext from "./canvas-context";
import Shape from "./shape-render";

export default function ShapesEdit() {
  const { shapes } = useContext(CanvasContext);

  if (shapes.length === 0)
    return (
      <text x="50%" y="50%" text-anchor="middle">
        Your Drawing is Empty
      </text>
    );

  return (
    <>
      {shapes.map(({ id, shape, ...props }) => (
        <Shape key={id} id={id} shape={shape} {...props} />
      ))}
    </>
  );
}
