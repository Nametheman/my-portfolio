import React from "react";
import classes from "./Projects.module.css";
import adashi from "../assets/images/adashi.png";
import cit from "../assets/images/cit.png";
import kcmfb from "../assets/images/kcmfb.png";
import tmsaas from "../assets/images/tmsaas.png";
import swatini from "../assets/images/Swatini.png";
import EachProject from "./EachProject";

const Projects = () => {
  const projects = [
    {
      name: " Adashi Esusu Akawo",
      link: "www.adashiesusuakawo.com",
      details:
        "Adashi is a platform that enables users to save money as a group or individually and receive payments at a predetermined period.",
      img: adashi,
      stack: [
        "React",
        "Typescript",
        "Redux",
        "Styled-components",
        "Ant Design",
      ],
      btnText: "Visit Live Website",
    },
    {
      name: " CIT Admin Dashboard",
      link: "ibank.citmfb.com",
      details:
        "Cit admin dashboard is the platform for bank managers to perform operations on account request, corporate banking, financial tracking and more.",
      img: cit,
      stack: ["React", "Javascript", "Redux", "Styled-components"],
      btnText: "Visit Live Website",
    },
    {
      name: " KCMFB Admin Dashboard",
      link: "kcmfb.com",
      details:
        "KC MFB admin dashboard is the platform for bank managers to perform operations on account request, corporate banking, financial tracking and more.",
      img: kcmfb,
      stack: ["React", "Javascript", "Redux", "Styled-components"],
      btnText: "Visit Live Website",
    },
    {
      name: " TMSAAS - API marketplace",
      link: "saas.tm30.net",
      details:
        "TM30’s SAAS Platform is a solution built to speed up integration for Company’s, developers, individuals or entrepreneurs’ websites, Applications or processes.",
      img: tmsaas,
      stack: ["React", "Typescript", "Redux", "Styled-components"],
      btnText: "Visit Live Website",
    },
    {
      name: " Swatini Power",
      link: "www.swatinipower.com",
      details:
        "Swatini power offer end-to-end energy-efficient solutions to commercial and industrial clientsm from design and development to financing and implementation.",
      img: swatini,
      stack: ["React", "Javascript", "Styled-components"],
      btnText: "Visit Live Website",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h3
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <span>3.</span> Projects
        </h3>
      </div>
      <div>
        {projects.map((p, idx) => {
          return (
            <EachProject
              img={p.img}
              key={idx * 1000}
              details={p.details}
              name={p.name}
              stack={p.stack}
              link={p.link}
              btnText={p.btnText}
            />
          );
        })}
      </div>

      <div></div>
    </div>
  );
};

export default Projects;
