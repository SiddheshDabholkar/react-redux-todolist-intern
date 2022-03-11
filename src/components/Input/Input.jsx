import React from "react";
import "./Input.scss";

export default function Input({ placeholder, onChange, value, name }) {
  return (
    <input
      className="Input"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
}
