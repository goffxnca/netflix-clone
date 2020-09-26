import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [navBgDark, setnavBgDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        console.log(window.scrollY);
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
          <span>SearchIcon</span>
          <span>GiftIcon</span>
          <span>NotificationIcon</span>
          <span>Avatar</span>
        </div>

        <div className="navbar__avatar">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
