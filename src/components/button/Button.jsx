import React from "react";

export default function Button({
  color,
  bg,
  bc,
  br,
  children,
  icon,
  p,
  m,
  w,
  c,
  onClick,
  size,
}) {
  return (
    <button
      style={{
        color,
        backgroundColor: bg,
        borderColor: bc,
        borderRadius: br,
        padding: p,
        margin: m,
        width: w,
        cursor: c,
        fontSize: size,
      }}
      className="Button"
      onClick={onClick}
    >
      <span className="ButtonRow">
        <span
          style={{
            marginRight: children ? "5px" : "0px",
          }}
        >
          {icon && icon}
        </span>
        <span className="ButtonRowText">{children}</span>
      </span>
    </button>
  );
}
