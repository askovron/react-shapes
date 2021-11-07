export default function ShapeCircle({ cx, cy, r, fill }) {
  return <ellipse cx={cx} cy={cy} rx={r} ry={r} fill={fill} />;
}
