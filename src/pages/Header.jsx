import React from "react";
import "./header.css";
import NavListItem from "../components/NavListItem";
import { navListData } from "../data/navListData";
import Search from "../components/Search";
import Button from "../components/Button";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        movies
      </a>
      <ul className="nav">
        {navListData.map((item) => (
          <NavListItem key={item.id} nav={item} />
        ))}
      </ul>
      <Search />
      <Button icon={<i class="bi bi-box-arrow-in-right"></i>} name="SIGN IN" />
    </header>
  );
}

export default Header;
