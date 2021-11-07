import { useState } from "react";
import CanvasContext from "./canvas-context";
import "./App.css";
import ShapesRender from "./shapes-render";
import ShapesEdit from "./shapes-edit";
import {
  getDefaultCircle,
  getDefaultLine,
  getDefaultRect,
  CircleProps,
  LineProps,
  RectProps,
} from "./shape-defaults";

export default function App() {
  const [shapes, setShapes] = useState<
    Array<CircleProps | LineProps | RectProps>
  >([]);

  return (
    <div className="App">
      <CanvasContext.Provider value={{ shapes, setShapes }}>
        <svg
          className="canvas"
          viewBox="0 0 300 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ShapesRender />
        </svg>
        <div className="addShapes">
          <button onClick={() => setShapes(shapes.concat(getDefaultCircle()))}>
            Add Circle
          </button>
          <button onClick={() => setShapes(shapes.concat(getDefaultRect()))}>
            Add Rectangle
          </button>
          <button onClick={() => setShapes(shapes.concat(getDefaultLine()))}>
            Add Line
          </button>
        </div>

        <h3>Shapes</h3>
        <ShapesEdit />
      </CanvasContext.Provider>
    </div>
  );
}
