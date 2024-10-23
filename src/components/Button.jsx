import React from "react";
import "./button.css";

function Button({ icon, name, color = "#ffffff", bgColor = "#ff3700" }) {
  return (
    <div className="mainBtn" style={{ color: color, background: bgColor }}>
      {icon}
      {name}
    </div>
  );
}

export default Button;
