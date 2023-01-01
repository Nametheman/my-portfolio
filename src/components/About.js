import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.container}>
      <div className={classes.body}>
        <h3>
          <span>1.</span>About
        </h3>
        <p>
          I am a striving self-taught <span>Frontend Developer</span> offering 1
          year of experience in providing skills in the areas of decision
          making, communication, evaluation and team work in Frontend web
          solutions. I look forward to being proficient in
          <span> designing, developing and testing </span> multiple web-based
          applications incorporating a range of technologies. Also aspiring to
          combine broad background with strong technical skills, practices and
          procedures to bring significant improvements in efficiency,
          productivity and business processes as a Front-End Developer.
        </p>
      </div>
    </section>
  );
};

export default About;
