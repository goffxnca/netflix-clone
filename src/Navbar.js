import React, { useEffect, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";

function Navbar() {
  const [navBgDark, setnavBgDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setnavBgDark(true);
      } else setnavBgDark(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${navBgDark && "navbar--dark"}`}>
      <div className="navbar__content">
        <div className="navbar__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
            alt="Netflix logo"
          />
        </div>

        <ul className="navbar__primary">
          <li>
            <a href="#" className="navbar__primary--active">
              Home
            </a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Latest</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
        </ul>

        <div className="navbar__secondary">
          <SearchIcon />
          <CardGiftcardIcon />
          <NotificationsIcon />

          <div className="navbar__avatar">
            <img
              src="https://occ-0-1983-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABbU3UHUlkChqMS0UORybrasISolcRmk12xz3v84eycdFXFb0OpRQn-eS1DPXHPfnedUm2GsZylJOXOpNbDjSDMw.png?r=a41"
              alt=""
            />
            <ArrowDropDownSharpIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
