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
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
