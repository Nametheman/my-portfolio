import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import file from "../../assets/files/cv.pdf";
import logo from "../../assets/images/logo.png";
import ThemeSwitch from "../bits/ThemeSwitch";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const links = [
    { id: "l1", number: "1", name: "About", path: "#about" },
    { id: "l2", number: "2", name: "Tools", path: "#skills" },
    { id: "l3", number: "3", name: "Projects", path: "#projects" },
    { id: "l4", number: "4", name: "Experience", path: "#experience" },
  ];
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <section
      className={classes.navbar}
      style={isDarkTheme ? { background: "#001b20" } : { background: "#fff" }}
    >
      <div
        className={classes.logo}
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <img src={logo} alt="logo" />
        <p>Emmy</p>
      </div>
      <ul className={classes.navLinks}>
        {links.map((link) => {
          return (
            <li
              key={link.id}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
              data-aos-delay="400"
            >
              <span>{link.number}</span>
              <a
                href={link.path}
                key={link.id}
                style={isDarkTheme ? {} : { color: "#001b20" }}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={classes.lastDiv}>
        <ThemeSwitch />
        <a
          className={classes.downloadBtn}
          href={file}
          download
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="800"
        >
          Get My CV
        </a>
      </div>
    </section>
  );
};

export default Navbar;
