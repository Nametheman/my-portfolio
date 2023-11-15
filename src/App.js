import React, { Fragment, useState, useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/navbar/loader/Loader";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // import Card from "./reusables/Card";
import Experience from "./components/Experience";
import styled from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import Timeline from "./components/Timeline";

function App() {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 3000);

  React.useEffect(() => {
    AOS.init();
  }, []);

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <MajorContainer $isDark={isDarkTheme}>
      {/* {load ? (
        <Loader />
      ) : ( */}
      <Fragment>
        <section>
          <Navbar />
          <Intro />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
          <Timeline />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </Fragment>
      {/* )} */}
    </MajorContainer>
  );
}

export default App;

const MajorContainer = styled.main`
  /* background-color: #001b20; */
  position: relative;
  background-color: ${(props) => (props.$isDark ? "#001b20" : "#fff")};
  transition: background-color 0.3s ease, color 0.3s ease;
`;
