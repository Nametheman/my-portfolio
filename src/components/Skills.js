import React from "react";
import classes from "./Skills.module.css";
import html5 from "../assets/images/html.png";
import css3 from "../assets/images/css3.png";
import git from "../assets/images/git.png";
import js from "../assets/images/js.png";
import next from "../assets/images/next.png";
import tailwind from "../assets/images/tailwind.png";
import ps from "../assets/images/ps.png";
import react from "../assets/images/react.png";
import Card from "../reusables/Card";

const Skills = () => {
  const listOfSkills = [
    { id: "s1", skill: "HTML5", logo: html5 },
    { id: "s2", skill: "CSS3", logo: css3 },
    { id: "s3", skill: "JavaScript", logo: js },
    { id: "s4", skill: "React JS", logo: react },
    { id: "s5", skill: "Next JS", logo: next },
    { id: "s6", skill: "Tailwind CSS", logo: tailwind },
    { id: "s7", skill: "Git & Git Soure Control", logo: git },
    { id: "s8", skill: "Adobe Photoshop", logo: ps },
  ];

  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.body}>
          <h3>
            <span>2.</span> Skills
          </h3>
        </div>
        <div className={classes.skillsContainer}>
          {listOfSkills.map((skill) => {
            return (
              <div className={classes.skillCard}>
                <Card key={skill.id}>
                  <img src={skill.logo} alt="logo" />
                  <p>{skill.skill}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.softskillsContainer}>
        <h3>Soft Skills</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          quaerat tempore enim expedita, maxime animi fugiat, alias beatae
          doloremque perferendis, perspiciatis reprehenderit accusantium rem
          dolores nobis ipsum laboriosam. Laboriosam, quas.
        </p>
      </div>
    </section>
  );
};

export default Skills;
