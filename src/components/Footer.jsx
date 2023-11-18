import React from "react";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/lala-kumar/" target="_blank">
          <img src={navIcon1} alt="Linkedin" />
        </a>
        <a href="https://github.com/Lala-kumar" target="_blank">
          <img src={navIcon4} alt="Github" />
        </a>
        <a href="https://twitter.com/LalaKumar699405" target="_blank">
          <img src={navIcon2} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/lala_kumar_2.0/" target="_blank">
          <img src={navIcon3} alt="Instagram" />
        </a>
      </div>
      <p className="text">Copyright 2023 © Lala Kumar </p>
    </footer>
  );
};
