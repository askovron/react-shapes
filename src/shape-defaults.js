export function getDefaultCircle() {
  return {
    id: `c${++getDefaultCircle.id}`,
    shape: "circle",
    cx: 10,
    cy: 10,
    r: 10,
    fill: "red",
  };
}
getDefaultCircle.id = 0;

export function getDefaultLine() {
  return {
    id: `l${++getDefaultLine.id}`,
    shape: "line",
    x1: 0,
    y1: 0,
    x2: 100,
    y2: 100,
    fill: "blue",
  };
}
getDefaultLine.id = 0;

export function getDefaultRect() {
  return {
    id: `r${++getDefaultRect.id}`,
    shape: "rect",
    fill: "green",
    x1: 0,
    y1: 0,
    width: 50,
    height: 50,
  };
}
getDefaultRect.id = 0;
