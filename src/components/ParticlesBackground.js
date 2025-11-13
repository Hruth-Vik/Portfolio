import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // For compatibility across versions, do not load any bundle here.
    // react-tsparticles will work with default engine.
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded callback
  }, []);

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  const particleCount = prefersReduced ? 0 : (isMobile ? 35 : 80);
  const speed = prefersReduced ? 0 : 1;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
            number: { value: particleCount, density: { enable: true, area: 800 } },
            color: { value: ['#ffffff', 'var(--grad2)'] },
            links: { enable: true, color: 'var(--grad2)', opacity: 0.25, width: 1, distance: 140 },
            move: { enable: true, speed: speed, outModes: { default: 'out' } },
          color: {
            value: ['#667eea', '#764ba2', '#f093fb'],
          },
          links: {
            color: '#667eea',
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: particleCount,
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          shape: {
            type: ['circle', 'triangle'],
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
        fullScreen: {
          enable: false,
        },
        style: {
          position: 'absolute',
        },
      }}
    />
  );
};

export default ParticlesBackground;