import { createContext } from "react";
import { CircleProps, LineProps, RectProps } from "./shape-defaults";

export interface ShapeContextInterface {
  shapes: Array<CircleProps | LineProps | RectProps>;
  setShapes: (value: Array<CircleProps | LineProps | RectProps>) => void;
}

export default createContext<ShapeContextInterface>(
  {} as ShapeContextInterface
);
