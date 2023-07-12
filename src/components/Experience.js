import React from "react";
import ExpCard from "../reusables/ExperienceCard";
import classes from "./Experience.module.css";
// import Experi

const Experience = () => {
  const experiences = [
    {
      id: "e1",
      experience: "Frontend Developer",
      place: "Side Hustle",
      pos: "Intern",
    },
    {
      id: "e2",
      experience: "Frontend Developer",
      place: "TM30 Global",
      pos: "Intern",
    },
    {
      id: "e3",
      experience: "Frontend Engineer",
      place: "TM30 Global",
      pos: "Full-time",
    },
    {
      id: "e4",
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
                  <h3>{exp.place}</h3>
                  <p>{exp.experience}</p>
                  <p>{exp.pos}</p>
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
