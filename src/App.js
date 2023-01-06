import React, { Fragment, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/navbar/loader/Loader";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Card from "./reusables/Card";

function App() {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 3000);
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
        </Fragment>
      )}
    </>
  );
}

export default App;
