import React, { useState } from "react";
import "./header.css";
import NavListItem from "../components/NavListItem";
import { navListData } from "../data/navListData";
import Search from "../components/Search";
import Button from "../components/Button";

function Header({ scroll }) {
  const [navList, setNavList] = useState(navListData);

  const handleNavClick = (id) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav._id === id) {
        nav.active = true;
      }
      return nav;
    });
    setNavList(newNavList);
  };

  return (
    <header className={`${scroll > 100 ? "scrolled" : undefined}`}>
      <a href="/" className="logo">
        movies
      </a>
      <ul className="nav">
        {navListData.map((item) => (
          <NavListItem key={item.id} nav={item} navOnClick={handleNavClick} />
        ))}
      </ul>
      <Search />
      <Button
        icon={<i className="bi bi-box-arrow-in-right"></i>}
        name="SIGN IN"
      />
    </header>
  );
}

export default Header;
