import { useContext } from "react";
import CanvasContext from "../canvas-context";

export default function ShapeLine(props) {
  const { shapes, setShapes } = useContext(CanvasContext);

  function onChange(key, value) {
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
            onChange={({ target }) => onChange("x1", target.value)}
            value={props.x1}
          />
        </label>
        <label>
          <span>Top</span>
          <input
            onChange={({ target }) => onChange("y1", target.value)}
            value={props.y1}
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
