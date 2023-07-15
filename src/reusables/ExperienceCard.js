import React, { useContext } from "react";
import classes from "./ExperienceCard.module.css";
import { ThemeContext } from "../context/ThemeContext";

const ExpCard = ({ children }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={classes.container}
      style={
        isDarkTheme
          ? { background: "#001b20" }
          : { background: "#fff", borderRadius: "10px" }
      }
    >
      {children}
    </div>
  );
};

export default ExpCard;
