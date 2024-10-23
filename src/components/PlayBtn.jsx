import React, { useState } from "react";
import "./playBtn.css";
import Modal from "./Modal";

function PlayBtn({ movie }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-center ${
          movie.active ? "active" : undefined
        }`}
      >
        <a href="#" className="playBtn" onClick={toggleModal}>
          <i className="bi bi-play"></i>
        </a>
        <p>watch Trailer</p>
      </div>
      {movie.active && (
        <Modal movie={movie} modal={modal} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default PlayBtn;
