import React from "react";
import classes from "./ExperienceCard.module.css";

const ExpCard = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default ExpCard;
