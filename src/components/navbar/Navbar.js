import React from "react";
import classes from "./Navbar.module.css";
import file from "../../assets/files/resume.pdf";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const links = [
    { id: "l1", number: "1", name: "About", path: "/#about" },
    { id: "l1", number: "2", name: "Skills", path: "/#skills" },
    { id: "l2", number: "3", name: "Projects", path: "/#projects" },
    { id: "l3", number: "4", name: "Contact", path: "/#contact" },
  ];

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
        <p>Emmy</p>
      </div>
      <ul className={classes.navLinks}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <span>{link.number}</span>
              <a href={link.path}>{link.name}</a>
            </li>
          );
        })}
      </ul>
      <a className={classes.downloadBtn} href={file} download>
        Get Resume
      </a>
    </nav>
  );
};

export default Navbar;
