import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(5deg); }
  66% { transform: translateY(10px) rotate(-3deg); }
`;

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`;

const Particle = styled.div`
  position: absolute;
  background: ${props => props.color};
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.6;
`;

const SimpleParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    color: ['#667eea', '#764ba2', '#f093fb'][Math.floor(Math.random() * 3)],
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2
  }));

  return (
    <ParticlesContainer>
      {particles.map(particle => (
        <Particle
          key={particle.id}
          size={particle.size}
          color={particle.color}
          duration={particle.duration}
          delay={particle.delay}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`
          }}
        />
      ))}
    </ParticlesContainer>
  );
};

export default SimpleParticles;