import { CSSProperties } from "react";
import "./index.css";

import Icon from "../Icon";

type Props = {
  name?: string;
  size?: CSSProperties["width"];

  bgColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
} & JSX.IntrinsicElements["div"];

export default function IconButton(props: Props) {
  const {
    color,
    bgColor,
    size,
    style,
    className,
    name,
    children,
    ...divProps
  } = props;

  const clssArr = ["dft-md3-icon-button", "outer-shadow-1", "clickable"];
  if (className) clssArr.push(className);

  let strSize;
  if (typeof size === "number") {
    strSize = size + "px";
  } else {
    strSize = size;
  }

  return (
    <div
      className={clssArr.join(" ")}
      style={{
        width: children ? "" : strSize,
        height: strSize,
        color: color,
        backgroundColor: bgColor,
        padding: children ? "8px 16px" : "8px",
        gap: 4,
        ...style,
      }}
      {...divProps}
    >
      <Icon name={name || ""} size={`calc(${strSize} - 40px)`} color={color} />
      {children}
    </div>
  );
}
