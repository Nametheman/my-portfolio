import React, { Fragment } from "react";
import classes from "./Intro.module.css";
import { TypeAnimation } from "react-type-animation";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Intro = () => {
  return (
    <Fragment>
      <section className={classes.wrapper}>
        <div className={classes.container}>
          <p className={classes.hi}>Hi Guys!</p>
          <p className={classes.name}>
            My name is <span>Emmanuel Owolabi</span>
          </p>
          <p className={classes.profession}>
            I
            <TypeAnimation
              sequence={[
                " am a Front End Developer", // Types 'One'
                2000, // Waits 1s
                " make web sauce!", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                " use HTML, CSS, JS, REACT", // Types 'Three' without deleting 'Two'
                1000,
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              // style={{ fontSize: "2em" }}
            />
          </p>
          <div className={classes.actions}>
            <div className={classes.actionBtn}>
              <a href="#" className={classes.viewProjects}>
                View Projects
              </a>
              <a href="tel: +2347066140323" className={classes.callMe}>
                Call Me
              </a>
            </div>
            <div className={classes.socials}>
              <BsWhatsapp />
              <BsLinkedin />
              <FaTwitter />
              <BsGithub />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
