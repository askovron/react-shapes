import { RectProps } from "../shape-defaults";

export default function ShapeRect({ x, y, height, width, fill }: RectProps) {
  return <rect x={x} y={y} width={width} height={height} fill={fill} />;
}
