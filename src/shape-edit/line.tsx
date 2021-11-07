import { useContext } from "react";
import { LineProps } from "../shape-defaults";
import CanvasContext from "../canvas-context";

export default function ShapeLine(props: LineProps): JSX.Element {
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
    <div className="shapeEdit">
      <div>Line {props.id.slice(1)}</div>
      <div className="shapeControls">
        <label>
          <span>Color</span>
          <input
            onChange={({ target }) => onChange("fill", target.value)}
            value={props.fill}
          />
        </label>
        <label>
          <span>X1</span>
          <input
            onChange={({ target }) => onChange("x1", target.value)}
            value={props.x1}
          />
        </label>
        <label>
          <span>Y1</span>
          <input
            onChange={({ target }) => onChange("y1", target.value)}
            value={props.y1}
          />
        </label>
        <label>
          <span>Thickness</span>
          <input
            onChange={({ target }) => onChange("strokeWidth", target.value)}
            value={props.strokeWidth}
          />
        </label>
        <label>
          <span>X2</span>
          <input
            onChange={({ target }) => onChange("x2", target.value)}
            value={props.x2}
          />
        </label>
        <label>
          <span>Y2</span>
          <input
            onChange={({ target }) => onChange("y2", target.value)}
            value={props.y2}
          />
        </label>
      </div>
      <button className="shapeDelete" onClick={onDelete}>
        delete
      </button>
    </div>
  );
}
