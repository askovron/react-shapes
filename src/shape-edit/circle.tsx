import { useContext } from "react";
import CanvasContext from "../canvas-context";
import { CircleProps } from "../shape-defaults";

export default function ShapeCircle(props: CircleProps): JSX.Element {
  const { shapes, setShapes } = useContext(CanvasContext);

  function onChange(key: string, value: string | number) {
    setShapes(
      shapes
        .filter(({ id: sid }) => sid !== props.id)
        .concat(
          Object.assign({}, props, {
            [key]: value,
          })
        )
    );
  }

  function onDelete() {
    setShapes(shapes.filter(({ id: sid }) => sid !== props.id));
  }

  return (
    <div className="shapeEdit circle">
      <div>Line {props.id.slice(1)}</div>
      <div className="shapeControls circle">
        <label>
          <span>Fill Color</span>
          <input
            onChange={({ target }) => onChange("fill", target.value)}
            value={props.fill}
          />
        </label>
        <label>
          <span>Left</span>
          <input
            onChange={({ target }) => onChange("cx", target.value)}
            value={props.cx}
          />
        </label>
        <label>
          <span>Top</span>
          <input
            onChange={({ target }) => onChange("cy", target.value)}
            value={props.cy}
          />
        </label>
        <label>
          <span>Radius</span>
          <input
            onChange={({ target }) => onChange("r", target.value)}
            value={props.r}
          />
        </label>
      </div>
      <button className="shapeDelete" onClick={onDelete}>
        delete
      </button>
    </div>
  );
}
