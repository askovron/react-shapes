export default function ShapeLine({ x1, y1, x2, y2, fill, strokeWidth }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={fill}
      strokeWidth={strokeWidth}
    />
  );
}
