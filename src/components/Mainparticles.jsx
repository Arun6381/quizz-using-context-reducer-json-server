import Particles from "@tsparticles/react";
import { useParticlesInit } from "./../hook/particleshook"; // Import the custom hook
import { useParticlesOptions } from "./../hook/particles"; // Import the options

export default function Particle() {
  const init = useParticlesInit();
  const options = useParticlesOptions();

  const particlesLoaded = (container) => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="particles-background"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
