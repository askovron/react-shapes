export enum ShapeType {
  circle = "circle",
  rect = "rect",
  line = "line",
}

export type ShapeProps = CircleProps | LineProps | RectProps;

export function getDefaultCircle(): CircleProps {
  return {
    id: `c${++getDefaultCircle.id}`,
    shape: ShapeType.circle,
    cx: 10,
    cy: 10,
    r: 10,
    fill: "red",
  };
}
getDefaultCircle.id = 0;

export type CircleProps = {
  id: string;
  shape: ShapeType;
  cx: number;
  cy: number;
  r: number;
  fill: string;
};

export function getDefaultLine(): LineProps {
  return {
    id: `l${++getDefaultLine.id}`,
    shape: ShapeType.line,
    x1: 0,
    y1: 0,
    x2: 100,
    y2: 100,
    fill: "blue",
    strokeWidth: 1,
  };
}
getDefaultLine.id = 0;

export type LineProps = {
  id: string;
  shape: ShapeType;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  fill: string;
  strokeWidth: number;
};

export function getDefaultRect(): RectProps {
  return {
    id: `r${++getDefaultRect.id}`,
    shape: ShapeType.rect,
    fill: "green",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  };
}
getDefaultRect.id = 0;

export type RectProps = {
  id: string;
  shape: ShapeType;
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
};
