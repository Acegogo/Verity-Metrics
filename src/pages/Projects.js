import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import DisabilityGallery from '../components/DisabilityGallery';

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

const ProjectContainer = styled.article`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(121, 40, 202, 0.05) 0%,
      rgba(77, 187, 235, 0.05) 50%,
      rgba(255, 157, 102, 0.05) 100%
    );
    border-radius: 16px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.gradients.secondary};
  }
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;

  li {
    position: relative;
    margin-bottom: 0.75rem;
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    
    &::before {
      content: "•";
      position: absolute;
      left: -1.5rem;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const AnimatedSection = styled(motion.section)`
  margin-bottom: 2rem;
`;

const AnimatedProjectContent = styled(motion.section)`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const AnimatedProjectHeader = styled(motion.header)`
  margin-bottom: 2rem;
  text-align: center;
`;

const AnimatedProjectOverview = styled(motion.section)`
  margin-bottom: 2rem;
`;

const AnimatedTestimonial = styled(motion.blockquote)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  font-style: italic;
  position: relative;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.5);
  }

  &::before {
    content: '"';
    position: absolute;
    top: -1rem;
    left: 1rem;
    font-size: 4rem;
    color: ${props => props.theme.colors.primary};
    opacity: 0.2;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-style: normal;
    color: ${props => props.theme.colors.primary};
  }
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5
    }
  }
};

const galleryAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const I3FBusinessGrantProject = () => {
  return (
    <>
      <Helmet>
        <title>I3F Business Grant Winner - Verity Metrics Projects</title>
        <meta name="description" content="Verity Metrics International wins I3F Business Grant Competition, securing Top 2 position among Kenya's top 12 ventures." />
        <meta name="keywords" content="I3F Business Grant, Business Competition, Verity Metrics Awards, Innovation Grant, Social Impact" />
      </Helmet>
      
      <ProjectContainer>
        <AnimatedProjectContent
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <AnimatedProjectHeader variants={fadeInUp}>
            <h1>🏆 Verity Metrics Wins I3F Business Grant</h1>
            
            <ProjectMeta>
              <MetaItem>🏆 Top 2 Finalist</MetaItem>
              <MetaItem>📅 July 2025</MetaItem>
              <MetaItem>🏢 Imagine * Inspire * Innovate Foundation (i3F)</MetaItem>
            </ProjectMeta>
          </AnimatedProjectHeader>

          <motion.div
            variants={fadeInUp}
            style={{ marginBottom: '2rem' }}
          >
            <img 
              src="/images/projects/VMIL 9th july (1).png" 
              alt="Verity Metrics I3F Business Grant Award"
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </motion.div>

          <AnimatedProjectOverview variants={fadeInUp}>
            <SectionTitle>Project Achievement</SectionTitle>
            <p>
              After 6 weeks of rigorous business training and assessment, Verity Metrics International emerged 1st in the business plan stage and secured a Top 2 spot in the final pitch round of the Imagine * Inspire * Innovate Foundation (i3F) Business Grant Competition.
            </p>
            <p>
              This competitive process featured Kenya's top 12 ventures, with only 5 finalists awarded grants. Verity Metrics was recognized for innovation, clarity and social impact. This milestone strengthens our commitment to inclusive development and research-backed solutions.
            </p>
          </AnimatedProjectOverview>

          <AnimatedSection variants={fadeInUp}>
            <SectionTitle>Competition Highlights</SectionTitle>
            <BulletList>
              <li>1st place in business plan stage</li>
              <li>Top 2 finalist in pitch competition</li>
              <li>Selected from Kenya's top 12 ventures</li>
              <li>One of only 5 finalists awarded grants</li>
              <li>Recognition for innovation and social impact</li>
            </BulletList>
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp}>
            <SectionTitle>Award Details</SectionTitle>
            <BulletList>
              <li><strong>Award Date:</strong> July 2025</li>
              <li><strong>Organization:</strong> Imagine * Inspire * Innovate Foundation (i3F)</li>
              <li><strong>Competition Duration:</strong> 6 weeks of training and assessment</li>
              <li><strong>Recognition:</strong> Innovation, clarity and social impact</li>
            </BulletList>
          </AnimatedSection>

          <AnimatedTestimonial variants={fadeInUp}>
            "This recognition validates our commitment to inclusive development and research-backed solutions that drive sustainable change."
            <strong>– Verity Metrics International Team</strong>
          </AnimatedTestimonial>
        </AnimatedProjectContent>
      </ProjectContainer>
    </>
  );
};

const DisabilityInclusionProject = () => {
  return (
    <>
      <Helmet>
        <title>Disability Inclusion Sensitization Forum - Verity Metrics Projects</title>
        <meta name="description" content="Verity Metrics International's disability inclusion sensitization forum at St. Margaret School, Tassia. Promoting inclusive education and awareness." />
        <meta name="keywords" content="Disability Inclusion, Inclusive Education, Awareness Forum, Verity Metrics Projects, Education for All" />
      </Helmet>
      
      <ProjectContainer>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={galleryAnimation}
        >
          <DisabilityGallery />
        </motion.div>
        
        <AnimatedProjectContent
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <AnimatedProjectHeader variants={fadeInUp}>
            <h1>Disability Inclusion Sensitization Forum – St. Margaret School, Tassia</h1>
            
            <ProjectMeta>
              <MetaItem>📍 Nairobi, Kenya</MetaItem>
              <MetaItem>📅 May 2025</MetaItem>
              <MetaItem>👤 Fondo Hassan – Director, Verity Metrics International</MetaItem>
            </ProjectMeta>
          </AnimatedProjectHeader>

          <AnimatedProjectOverview variants={fadeInUp}>
            <SectionTitle>Overview</SectionTitle>
            <p>
              Verity Metrics International partnered with St. Margaret Catholic School in Tassia to conduct a three-week sensitization forum focused on disability awareness and inclusive education. The sessions aimed to equip educators, staff, and learners with the knowledge and tools needed to foster an inclusive school environment.
            </p>
          </AnimatedProjectOverview>

          <AnimatedSection variants={fadeInUp}>
            <SectionTitle>Key Focus Areas</SectionTitle>
            <BulletList>
              <li>Understanding disability and challenging stigma</li>
              <li>Inclusive communication and language</li>
              <li>Models of disability (medical vs. social)</li>
              <li>Types of disabilities in education</li>
              <li>Building inclusive classroom strategies</li>
            </BulletList>
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp}>
            <SectionTitle>Outcomes</SectionTitle>
            <BulletList>
              <li>Improved awareness among teachers and students</li>
              <li>Increased confidence in handling disability-related issues</li>
              <li>Stronger commitment to inclusive practices</li>
              <li>Positive feedback from educators and learners</li>
            </BulletList>
          </AnimatedSection>

          <AnimatedTestimonial variants={fadeInUp}>
            "This was one of the most eye-opening sessions I've ever attended. We're rethinking how we include all learners."
            <strong>– Teacher, St. Margaret School</strong>
          </AnimatedTestimonial>
        </AnimatedProjectContent>
      </ProjectContainer>
    </>
  );
};

function Projects() {
  return (
    <ProjectsSection>
      <Helmet>
        <title>Projects - Verity Metrics International</title>
        <meta name="description" content="Explore Verity Metrics International's projects in disability inclusion, education, and community development." />
      </Helmet>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}>
        <I3FBusinessGrantProject />
        <DisabilityInclusionProject />
      </div>
    </ProjectsSection>
  );
}

export default Projects; 