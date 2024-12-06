import { CSSProperties } from "react";
import "./index.css";

type Props = {
  bgColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
} & JSX.IntrinsicElements["div"];

export default function Button(props: Props) {
  const { color, bgColor, style, className, ...divProps } = props;

  const clssArr = ["dft-md3-button", "flex aictr jcctr clickable  "];
  if (className) clssArr.push(className);

  return (
    <div
      className={clssArr.join(" ")}
      style={{
        color: color,
        backgroundColor: bgColor,
        ...style,
      }}
      {...divProps}
    ></div>
  );
}
