import React from "react";
import "./movieContent.css";
import Button from "./Button";

function MovieContent() {
  return (
    <div className="content active">
      <img src="" alt="Movie Title" className="movie-title" />
      <h4>
        <span>Year</span>
        <span>age</span>
        <span>length</span>
        <span>category</span>
      </h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sit
        unde, cumque a dolores, itaque voluptates delectus accusamus quam qui
        mollitia ipsum, ea molestias vero eos commodi sapiente ad nisi?
      </p>
      <div className="button">
        <Button
          icon={<i class="bi bi-bookmark"></i>}
          name="Book"
          color="#ff3700"
          bgColor="#ffffff"
        />
        <Button icon={<i class="bi bi-plus"></i>} name="My List" />
      </div>
    </div>
  );
}

export default MovieContent;
