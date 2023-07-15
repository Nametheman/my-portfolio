import React, { useContext } from "react";
import ExpCard from "../reusables/ExperienceCard";
import classes from "./Experience.module.css";
import { ThemeContext } from "../context/ThemeContext";

// import Experi

const Experience = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const experiences = [
    {
      id: "ex1",
      experience: "Frontend Developer",
      place: "Side Hustle",
      pos: "Intern",
    },
    {
      id: "ex2",
      experience: "Frontend Developer",
      place: "TM30 Global",
      pos: "Intern",
    },
    {
      id: "ex3",
      experience: "Frontend Engineer",
      place: "TM30 Global",
      pos: "Full-time",
    },
    {
      id: "ex4",
      experience: "Frontend Engineer",
      place: "Swatini Power",
      pos: "Full-time",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.body}>
          <h3
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="800"
            data-aos-delay="300"
            style={isDarkTheme ? {} : { color: "#001b20" }}
          >
            <span>4.</span>Experience
          </h3>
        </div>
        <div className={classes.expContainer}>
          {experiences.map((exp, idx) => {
            return (
              <div
                className={classes.expCard}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
                data-aos-delay={`${idx + 1 - 0.5 * 300}`}
              >
                <ExpCard key={exp.id}>
                  <h3 style={isDarkTheme ? {} : { color: "#001b20" }}>
                    {exp.place}
                  </h3>
                  <p style={isDarkTheme ? {} : { color: "#001b20" }}>
                    {exp.experience}
                  </p>
                  <p style={isDarkTheme ? {} : { color: "#001b20" }}>
                    {" "}
                    {exp.pos}
                  </p>
                </ExpCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
