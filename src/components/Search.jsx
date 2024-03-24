import React from "react";
import "./search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search..." />
      <i class="bi bi-search"></i>
    </div>
  );
}

export default Search;
