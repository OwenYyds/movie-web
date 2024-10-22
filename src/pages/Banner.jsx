import { useEffect, useState } from "react";
import React from "react";
import "./banner.css";
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";
import MovieSwiper from "../components/MovieSwiper";
import bgImg from "../images/bg-transformer.jpg";
function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="banner">
      <div className="movie">
        <img src={bgImg} alt="" className="bgImg" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <MovieContent />
            </div>
            <div className="col-lg-6 col-md-12">
              <MovieDate />
              <PlayBtn />
            </div>
          </div>
        </div>
      </div>
      {movies && movies.length > 0 && <MovieSwiper slides={movies} />}
    </div>
  );
}

export default Banner;
