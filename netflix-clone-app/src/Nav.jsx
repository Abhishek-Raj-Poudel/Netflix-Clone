import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handelShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handelShow(true);
      } else handelShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://th.bing.com/th/id/R.5d0f9ca26f942f0eda69ffd4dc1710dc?rik=OI3uYVp0osJ3jw&pid=ImgRaw&r=0"
        alt="netflix character"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
