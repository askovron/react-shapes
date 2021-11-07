import { useState } from "react";
import CanvasContext from "./canvas-context";
import "./App.css";
import Shape from "./shape-render";
import ShapesList from "./shapes-edit";
import {
  getDefaultCircle,
  getDefaultLine,
  getDefaultRect,
} from "./shape-defaults.js";

export default function App() {
  const [shapes, setShapes] = useState([]);

  return (
    <div className="App">
      <svg
        className="canvas"
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {shapes.map(({ id, shape, ...props }) => (
          <Shape key={id} id={id} shape={shape} {...props} />
        ))}
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
      <CanvasContext.Provider value={{ shapes, setShapes }}>
        <h3>Shapes</h3>
        <ShapesList />
      </CanvasContext.Provider>
    </div>
  );
}
