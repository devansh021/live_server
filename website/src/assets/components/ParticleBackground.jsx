import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1, // behind everything
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ['#00ffff', '#ff00ff', '#00ff99'],
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            outModes: {
              default: 'bounce',
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
