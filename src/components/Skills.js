import React, { useContext } from "react";
import classes from "./Skills.module.css";
import html5 from "../assets/images/html.png";
import css3 from "../assets/images/css3.png";
import git from "../assets/images/git.png";
import js from "../assets/images/js.png";
import ts from "../assets/images/ts.png";
import next from "../assets/images/next.png";
import redux from "../assets/images/redux.png";
import tailwind from "../assets/images/tailwind.png";
import node from "../assets/images/node.png";
import exp from "../assets/images/express.png";
import mongo from "../assets/images/mongo.png";
import postgre from "../assets/images/postgre.png";
import sql from "../assets/images/sql.png";
import react from "../assets/images/react.png";
import angular from "../assets/images/angular.png";
import Card from "../reusables/Card";
import { ThemeContext } from "../context/ThemeContext";

const Skills = () => {
  const frontendSkills = [
    { id: "sk1", skill: "HTML5", logo: html5 },
    { id: "sk2", skill: "CSS3", logo: css3 },
    { id: "sk3", skill: "JavaScript", logo: js },
    { id: "sk4", skill: "TypeScript", logo: ts },
    { id: "sk7", skill: "Next JS", logo: next },
    { id: "sk5", skill: "React JS", logo: react },
    { id: "sk5", skill: "React Native", logo: react },
    { id: "sk10", skill: "Angular JS", logo: angular },
    { id: "sk6", skill: "Redux", logo: redux },
    { id: "sk8", skill: "Tailwind CSS", logo: tailwind },
    { id: "sk9", skill: "Git & Git Soure Control", logo: git },
  ];

  const backendSkills = [
    { id: "sk11", skill: "NodeJS", logo: node },
    { id: "sk12", skill: "ExpressJS", logo: exp },
    { id: "sk13", skill: "MongoDB", logo: mongo },
    { id: "sk13", skill: "PostgreSQL", logo: postgre },
    { id: "sk13", skill: "MySQL", logo: sql },
  ];

  const { isDarkTheme } = useContext(ThemeContext);

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
            <span>2.</span> Tools
          </h3>
        </div>

        <h3 className="skills-header">Frontend Skills</h3>
        <div className={classes.skillsContainer}>
          {frontendSkills.map((skill, idx) => {
            return (
              <div
                className={classes.skillCard}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
                data-aos-delay={`${idx + 4 - 0.5 * 300}`}
              >
                <Card key={skill.id}>
                  <img src={skill.logo} alt="logo" />
                  <p style={isDarkTheme ? {} : { color: "#001b20" }}>
                    {skill.skill}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
        <h3 className="skills-header">Backend Skills</h3>
        <div className={classes.skillsContainer}>
          {backendSkills.map((skill, idx) => {
            return (
              <div
                className={classes.skillCard}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
                data-aos-delay={`${idx + 4 - 0.5 * 300}`}
              >
                <Card key={skill.id}>
                  <img src={skill.logo} alt="logo" />
                  <p style={isDarkTheme ? {} : { color: "#001b20" }}>
                    {skill.skill}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
