import React from "react";
import "./playBtn.css";

function PlayBtn({ movie }) {
  return (
    <div
      className={`trailer d-flex align-items-center justify-content-center ${
        movie.active ? "active" : undefined
      }`}
    >
      <a href="#" className="playBtn">
        <i className="bi bi-play"></i>
      </a>
      <p>watch Trailer</p>
    </div>
  );
}

export default PlayBtn;
