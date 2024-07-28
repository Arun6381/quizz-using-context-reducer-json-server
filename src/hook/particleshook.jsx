import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // Make sure this is installed

export function useParticlesInit() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      try {
        await loadFull(engine); // Load the full engine
        setInit(true); // Set initialization complete
      } catch (error) {
        console.error("Error loading particles engine:", error);
      }
    });
  }, []);

  return init;
}
