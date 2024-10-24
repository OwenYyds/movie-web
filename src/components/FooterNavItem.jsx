import React from "react";
import "./footerNavItem.css";
function FooterNavItem({ name }) {
  return (
    <li>
      <i className="bi bi-forward"></i>
      <a href="/">{name}</a>
    </li>
  );
}

export default FooterNavItem;
