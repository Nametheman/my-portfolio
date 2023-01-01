import React, { Fragment, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/navbar/loader/Loader";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Card from "./reusables/Card";

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
          <Navbar />
          <Intro />
          <About id="about" />
          <Skills id="skills" />
        </Fragment>
      )}
    </>
  );
}

export default App;
