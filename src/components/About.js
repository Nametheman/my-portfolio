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
            Dynamic and detail-oriented <span>Software Developer</span> with
            over 4 years of experience specializing in building and optimizing
            user-focused websites for customers with various business
            objectives. Proficient in an assortment of technologies, including{" "}
            <span>
              TypeScript, React, React Native, NodeJS, ExpressJs and SQL/NOSQL
              Management
            </span>
            . Demonstrated ability to adapt to new technology and teach
            teammates. Committed to high standards of{" "}
            <span>
              user experience, usability, and speed for multiple types of
              end-users
            </span>
            .
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
