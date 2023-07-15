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
import ps from "../assets/images/ps.png";
import react from "../assets/images/react.png";
import Card from "../reusables/Card";
import { ThemeContext } from "../context/ThemeContext";

const Skills = () => {
  const listOfSkills = [
    { id: "sk1", skill: "HTML5", logo: html5 },
    { id: "sk2", skill: "CSS3", logo: css3 },
    { id: "sk3", skill: "JavaScript", logo: js },
    { id: "sk4", skill: "TypeScript", logo: ts },
    { id: "sk5", skill: "React JS", logo: react },
    { id: "sk6", skill: "Redux", logo: redux },
    { id: "sk7", skill: "Next JS", logo: next },
    { id: "sk8", skill: "Tailwind CSS", logo: tailwind },
    { id: "sk9", skill: "Git & Git Soure Control", logo: git },
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
        <div className={classes.skillsContainer}>
          {listOfSkills.map((skill, idx) => {
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
      {/* <div className={classes.softskillsContainer}>
        <h3>Soft Skills</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          quaerat tempore enim expedita, maxime animi fugiat, alias beatae
          doloremque perferendis, perspiciatis reprehenderit accusantium rem
          dolores nobis ipsum laboriosam. Laboriosam, quas.
        </p>
      </div> */}
    </section>
  );
};

export default Skills;
