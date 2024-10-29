import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../components/Card";
import { filterListData } from "../data/filterListData";
function Schedule() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterListData);

  const fetchMovies = () => {
    const dataUrl = `${process.env.REACT_APP_API_URL}/data/movieData.json`;
    fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFilter = (category) => {
    const filter = filters.map((filter) => {
      filter.active = false;
      if (filter.name === category) {
        filter.active = true;
      }
      return filter;
    });
    setFilters(filter);

    if (category === "All") {
      setMovies(data);
      return;
    }
    const filteredMovies = data.filter((movie) => {
      return movie.category === category;
    });
    setMovies(filteredMovies);
  };

  return (
    <section id="schedule" className="schedule">
      <div className="contrainer-fluid">
        <div className="row">
          <div className="row">
            <h4 className="section-title">Opening this week</h4>
          </div>
          <div className="row">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={`${filter.active ? "active" : undefined}`}
                  onClick={() => handleFilter(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="row mt-5">
            {movies &&
              movies.length &&
              movies.map((movie) => <Card movie={movie} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
