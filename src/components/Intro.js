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
          <p
            className={classes.hi}
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            Hi Guys!
          </p>
          <p
            className={classes.name}
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            My name is <span>Emmanuel Owolabi</span>
          </p>
          <p
            className={classes.profession}
            // data-aos="zoom-in"
            // data-aos-easing="ease"
            // data-aos-duration="500"
            // data-aos-delay="1000"
          >
            I
            <TypeAnimation
              sequence={[
                " am a Frontend Developer", // Types 'One'
                2000, // Waits 1s
                " make web sauce!", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                " love JavaScript & TypeScript", // Types 'Three' without deleting 'Two'
                1000,
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </p>

          <div
            className={classes.actions}
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            <div className={classes.actionBtn}>
              <a href="#projects" className={classes.viewProjects}>
                View Projects
              </a>
              <a href="tel: +2347066140323" className={classes.callMe}>
                Call Me
              </a>
            </div>
            <div
              className={classes.socials}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
              data-aos-delay="1000"
            >
              <a
                href="https://www.linkedin.com/in/emmanuel-owolabi-6b5b73172/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://wa.me/+2348138469203"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp />
              </a>
              <a
                href="https://twitter.com/infiniti0x"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/Nametheman"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
