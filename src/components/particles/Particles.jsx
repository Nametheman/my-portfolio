import React, { useMemo, useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import Particles from "react-particles";

const Particles = () => {
  const options = useMemo(() => {
    return {};
  });
  const particlesInit = useCallback(async (engine) => {
    loadSlim(engine);
  });
  return <Particles init={particlesInit} options={options} />;
};

export default Particles;
