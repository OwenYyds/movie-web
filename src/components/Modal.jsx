import React from "react";
import "./modal.css";

function Modal({ movie, modal, toggleModal }) {
  return (
    <div className={`movieModal ${modal ? "active" : undefined}`}>
      <a href="/" className="modalClose" onClick={toggleModal}>
        <i className="bi bi-x-circle"></i>
      </a>
      <iframe
        width="1206"
        height="678"
        src={movie.video}
        title="LeBron &amp; Bronny James Play TOGETHER for the First Time (FULL VIDEO)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Modal;
