import React from "react";
import "./playBtn.css";

function PlayBtn() {
  return (
    <div className="trailer d-flex align-items-center justify-content-center active">
      <a href="#" className="playBtn">
        <i className="bi bi-play"></i>
      </a>
      <p>watch Trailer</p>
    </div>
  );
}

export default PlayBtn;
