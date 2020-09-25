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
