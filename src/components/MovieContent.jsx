import React from "react";
import "./movieContent.css";
import Button from "./Button";

function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active && "active"}`}>
      <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span>{movie.ageLimit}</span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        <Button
          icon={<i className="bi bi-bookmark"></i>}
          name="Book"
          color="#ff3700"
          bgColor="#ffffff"
        />
        <Button icon={<i className="bi bi-plus"></i>} name="My List" />
      </div>
    </div>
  );
}

export default MovieContent;
