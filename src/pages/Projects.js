import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
  padding: 8rem 2rem 5rem;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.08),
    rgba(192, 132, 252, 0.08),
    rgba(96, 165, 250, 0.08)
  );
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${props => props.theme.gradients.secondary};
    opacity: 0.2;
  }
`;

const ComingSoonContainer = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => props.theme.gradients.secondary};
  }
`;

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const AnimatedDots = styled(motion.span)`
  display: inline-block;
  margin-left: 8px;
  letter-spacing: 4px;
`;

function Projects() {
  const dotsVariants = {
    animate: {
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <ProjectsSection>
      <ComingSoonContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We're working on something exciting! Our projects showcase will be available soon
          <AnimatedDots
            variants={dotsVariants}
            animate="animate"
          >
            ...
          </AnimatedDots>
        </Description>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ 
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="180 180"
              strokeDashoffset="180"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="180;0"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <defs>
              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="80"
                y2="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </ComingSoonContainer>
    </ProjectsSection>
  );
}

export default Projects; 