import React, { useContext } from "react";
import classes from "./About.module.css";
import img from "../assets/images/emmy.jpeg";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <section className={classes.container}>
      <div className={classes.body}>
        <h3
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="900"
          data-aos-delay="1000"
          style={isDarkTheme ? {} : { color: "#001b20" }}
        >
          <span>1.</span>About
        </h3>
        <div className={classes.body2}>
          <p
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1200"
            data-aos-delay="1000"
            style={isDarkTheme ? {} : { color: "#001b20" }}
          >
            I am a striving self-taught and solution-focused
            <span> Frontend Developer</span> offering 3 years of experience in
            providing skills in the areas of decision making, communication,
            evaluation and team work in Frontend web solutions. I look forward
            to being proficient in
            <span> developing and testing </span> multiple web-based
            applications incorporating a range of technologies. Also aspiring to
            combine broad background with strong technical skills, practices and
            procedures to bring significant improvements in efficiency,
            productivity and business processes as a Front-End Developer.
          </p>
          <div
            className={classes.pictureContainer}
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1200"
            data-aos-delay="1400"
          >
            <div className={classes.wrapper}>
              <img src={img} alt="profile picture"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
