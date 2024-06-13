"use client";

import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function ParticlesContainer() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (engine) => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticals"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullscreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#fff" },
          links: {
            color: "#fff",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1,
          },
          collisions: {
            enabled: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number:{
             density:{ 
              enable: true,
              area: 800
             }, 
             value: 80
          },
          opacity: {  
            value: 1,   
          },
          shape: {
            type: "circle"
          },
          size: {
            value: {min: 1, max: 5}
          }
        },
        detectRetina: true, 
      }}
    />
  );
}

export default ParticlesContainer;
