import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, transparent 0%, rgba(102, 126, 234, 0.05) 50%, transparent 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #ffffff 0%, #667eea 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.left ? 'flex-end' : 'flex-start'};
  padding: 2rem 0;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 60px;
  }
`;

const TimelineContent = styled(motion.div)`
  background: rgba(102, 126, 234, 0.1);
  border-radius: 20px;
  padding: 2rem;
  max-width: 45%;
  position: relative;
  border: 1px solid rgba(102, 126, 234, 0.2);
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 30px;
    ${props => props.left ? 'left: 100%' : 'right: 100%'};
    width: 0;
    height: 0;
    border: 10px solid transparent;
    ${props => props.left ? 
      'border-left-color: rgba(102, 126, 234, 0.1)' : 
      'border-right-color: rgba(102, 126, 234, 0.1)'};
  }
  
  @media (max-width: 768px) {
    max-width: calc(100% - 60px);
    
    &::before {
      right: 100%;
      border-right-color: rgba(102, 126, 234, 0.1);
      border-left-color: transparent;
    }
  }
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

const TimelineDot = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 4px solid #0a0a0a;
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const CompanyIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 4px solid #0a0a0a;
  z-index: 3;
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  color: #a0a0a0;
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const Description = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.3);
`;

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      duration: '2022 - Present',
      icon: '🚀',
      description: 'Leading development of scalable web applications using React.js and Node.js. Mentoring junior developers and implementing best practices for code quality and performance optimization.',
      technologies: ['React.js', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'GraphQL']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations',
      duration: '2020 - 2022',
      icon: '💻',
      description: 'Developed responsive web applications and improved user experience through modern frontend technologies. Collaborated with design team to implement pixel-perfect UI components.',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Redux', 'Webpack', 'Jest']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      duration: '2019 - 2020',
      icon: '🌱',
      description: 'Built and maintained multiple client websites using modern web technologies. Gained experience in full-stack development and agile methodologies.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap']
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      duration: '2018 - 2019',
      icon: '💼',
      description: 'Delivered custom web solutions for small businesses and startups. Managed client relationships and project timelines while building expertise in various technologies.',
      technologies: ['WordPress', 'JavaScript', 'HTML/CSS', 'PHP', 'Photoshop']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </SectionTitle>

        <Timeline>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <TimelineItem key={index} left={isLeft}>
                  <TimelineContent
                    left={isLeft}
                    variants={isLeft ? itemVariants : itemVariantsRight}
                    whileHover={{ scale: 1.02 }}
                  >
                    <JobTitle>{exp.title}</JobTitle>
                    <Company>{exp.company}</Company>
                    <Duration>{exp.duration}</Duration>
                    <Description>{exp.description}</Description>
                    <TechStack>
                      {exp.technologies.map((tech, techIndex) => (
                        <TechTag key={techIndex}>{tech}</TechTag>
                      ))}
                    </TechStack>
                  </TimelineContent>
                  
                  <TimelineDot
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.3 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  <CompanyIcon
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.3 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                  >
                    {exp.icon}
                  </CompanyIcon>
                </TimelineItem>
              );
            })}
          </motion.div>
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;