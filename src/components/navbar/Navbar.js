import React from "react";
import classes from "./Navbar.module.css";
import file from "../../assets/files/cv.pdf";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const links = [
    { id: "l1", number: "1", name: "About", path: "#about" },
    { id: "l1", number: "2", name: "Tools", path: "#skills" },
    { id: "l2", number: "3", name: "Projects", path: "#projects" },
    { id: "l3", number: "4", name: "Experience", path: "#experience" },
  ];

  return (
    <nav className={classes.navbar}>
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
              <a href={link.path} key={link.id}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
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
    </nav>
  );
};

export default Navbar;
