import React, { Fragment, useState } from "react";
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

function App() {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 3000);

  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
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
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </Fragment>
      )}
    </>
  );
}

export default App;
