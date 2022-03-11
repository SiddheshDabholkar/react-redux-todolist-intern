import React from "react";
import "./Input.scss";

export default function Input({ placeholder, onChange }) {
  return (
    <input className="Input" placeholder={placeholder} onChange={onChange} />
  );
}
