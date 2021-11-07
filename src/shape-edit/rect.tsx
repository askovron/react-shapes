import { useContext } from "react";
import { RectProps } from "../shape-defaults";
import CanvasContext from "../canvas-context";

export default function ShapeRect(props: RectProps): JSX.Element {
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
      <div>Rectangle {props.id.slice(1)}</div>
      <div className="shapeControls">
        <label>
          <span>Fill color</span>
          <input
            onChange={({ target }) => onChange("fill", target.value)}
            value={props.fill}
          />
        </label>
        <label>
          <span>Left</span>
          <input
            onChange={({ target }) => onChange("x", target.value)}
            value={props.x}
          />
        </label>
        <label>
          <span>Top</span>
          <input
            onChange={({ target }) => onChange("y", target.value)}
            value={props.y}
          />
        </label>
        <label>
          <span>Width</span>
          <input
            onChange={({ target }) => onChange("width", target.value)}
            value={props.width}
          />
        </label>
        <label>
          <span>Height</span>
          <input
            onChange={({ target }) => onChange("height", target.value)}
            value={props.height}
          />
        </label>
      </div>
      <button className="shapeDelete" onClick={onDelete}>
        delete
      </button>
    </div>
  );
}
