import { CircleProps } from "../shape-defaults";

export default function ShapeCircle({ cx, cy, r, fill }: CircleProps) {
  return <ellipse cx={cx} cy={cy} rx={r} ry={r} fill={fill} />;
}
