import React from "react";
import "./backToTopBtn.css";

function BackToTopBtn({ scroll }) {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`back-to-top ${scroll > 100 ? "active" : undefined}`}
      onClick={backToTop}
    >
      <i className="bi bi-arrow-up-short"></i>
    </div>
  );
}

export default BackToTopBtn;
