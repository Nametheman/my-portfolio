import React from "react";
import classes from "./Loader.module.css";
import logo from "../../../assets/images/logo.png";

const loader = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default loader;
