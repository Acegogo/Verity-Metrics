import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 8rem 2rem 5rem;
  background: linear-gradient(
    -45deg,
    rgba(96, 165, 250, 0.08),
    rgba(99, 102, 241, 0.08),
    rgba(192, 132, 252, 0.08)
  );
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

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${props => props.theme.gradients.primary};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled(motion.div)`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.text};
  }

  .intro-text {
    text-align: left;
  }

  .below-image-content {
    grid-column: 1 / -1;
    text-align: center;
    max-width: 800px;
    margin: 3rem auto 0;

    h3 {
      text-align: center;
      
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    p {
      text-align: center;
    }

    ul {
      text-align: left;
      max-width: 600px;
      margin: 1.5rem auto;
      padding-left: 2rem;
    }
  }

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.8rem;
    margin: 2.5rem 0 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 2px;
      background: ${props => props.theme.gradients.secondary};
    }
  }

  ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 1rem;
      line-height: 1.6;
      color: ${props => props.theme.colors.text};
      position: relative;

      &::before {
        content: "•";
        color: ${props => props.theme.colors.primary};
        position: absolute;
        left: -1.2rem;
      }
    }
  }
`;

const ImageContent = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
`;

const BelowImageContent = styled(motion.div)`
  grid-column: 1 / -1;
  width: 100%;
  margin: 5rem auto 0;
  text-align: center;

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.8rem;
    margin: 3rem 0 1.5rem;
    position: relative;
    padding-bottom: 1rem;
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      background: ${props => props.theme.gradients.primary};
    }
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.text};
    font-size: 1.2rem;
    padding: 0 2rem;
  }

  ul {
    width: 100%;
    margin: 2rem auto;
    padding: 0 2rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li {
      line-height: 1.8;
      color: ${props => props.theme.colors.text};
      position: relative;
      padding: 1.5rem 3rem;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;
      font-size: 1.2rem;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: 768px) {
    p, ul li {
      font-size: 1.1rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

function About() {
  return (
    <AboutSection>
      <AboutContainer>
        <Title>About Us</Title>
        <ContentGrid>
          <TextContent
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="intro-text">
              <p>
                Verity Metrics International was born out of a passion for fostering equity and inclusion. 
                With years of experience in local and international development sectors, our team brings deep 
                expertise and a proven track record in designing and implementing programs that drive 
                sustainable development.
              </p>
              
              <p>
                We believe that data tells a story, and our role is to help organizations uncover that story 
                to make informed decisions, improve program effectiveness, and maximize their impact.
              </p>
            </div>
          </TextContent>

          <ImageContent
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Team collaboration"
            />
          </ImageContent>

          <BelowImageContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide innovative and evidence-based solutions that enable organizations to:
            </p>
            <ul>
              <li>Measure success through rigorous data collection and analysis.</li>
              <li>Enhance transparency with actionable insights and comprehensive reporting.</li>
              <li>Drive sustainable change by aligning strategies with global standards and stakeholder priorities.</li>
            </ul>
            <p>
              We work collaboratively with clients worldwide to ensure their programs are effective, inclusive and impactful.
            </p>

            <h3>Our Vision</h3>
            <p>
              To be a global leader in empowering organizations with data-driven solutions, fostering 
              accountability and driving sustainable development through innovative research, monitoring, 
              evaluation and learning.
            </p>
          </BelowImageContent>
        </ContentGrid>
      </AboutContainer>
    </AboutSection>
  );
}

export default About; 