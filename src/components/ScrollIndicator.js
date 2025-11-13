import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProgressContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1001;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  transform-origin: 0%;
  background-size: 200% 100%;
  animation: gradient-slide 3s ease infinite;
  
  @keyframes gradient-slide {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const CircleIndicator = styled(motion.div)`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Circle = styled(motion.div)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? 
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
    'rgba(255, 255, 255, 0.2)'};
  border: 2px solid ${props => props.active ? '#667eea' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-color: #667eea;
  }
`;

const TooltipText = styled(motion.span)`
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

const CircleContainer = styled.div`
  position: relative;
  
  &:hover ${TooltipText} {
    opacity: 1;
  }
`;

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);


  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.pageYOffset;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentProgress / scrollHeight) * 100);
      }
    };

    const updateActiveSection = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      const scrollPosition = window.pageYOffset + window.innerHeight / 3;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    const handleScroll = () => {
      updateScrollProgress();
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ProgressContainer>
        <ProgressBar
          style={{ scaleX: scrollProgress / 100 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.1 }}
        />
      </ProgressContainer>

      <CircleIndicator
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {sections.map((section, index) => (
          <CircleContainer key={section.id}>
            <Circle
              active={activeSection === index}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            <TooltipText
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0, x: 0 }}
            >
              {section.label}
            </TooltipText>
          </CircleContainer>
        ))}
      </CircleIndicator>
    </>
  );
};

export default ScrollIndicator;