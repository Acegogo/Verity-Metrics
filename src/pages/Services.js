import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  padding: 8rem 2rem 5rem;
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.08) 0%,
    rgba(77, 187, 235, 0.08) 50%,
    rgba(255, 157, 102, 0.08) 100%
  );
  position: relative;
  ${props => props.theme.animations.gradient};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.theme.gradients.primary};
    opacity: 0.4;
  }
`;

const ServicesContainer = styled.div`
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

const ServiceCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.05) 0%,
    rgba(77, 187, 235, 0.05) 100%
  );
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.card};
  overflow: hidden;
  margin-bottom: 2rem;
  border: 1px solid rgba(121, 40, 202, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.hover},
                ${props => props.theme.shadows.glow};
    border-color: ${props => props.theme.colors.accent};
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  background: ${props => props.theme.gradients.primary};
  ${props => props.theme.animations.gradient};
  border-radius: 20px;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadows.glow};
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 100%
    );
    transform: rotate(-45deg);
  }
  
  img {
    width: 50px;
    height: 50px;
    transform: rotate(-45deg);
    filter: brightness(0) invert(1);
    transition: all 0.3s ease;
  }

  ${ServiceCard}:hover & {
    transform: rotate(225deg);
    
    img {
      transform: rotate(-225deg);
    }
  }
`;

const ServiceContent = styled.div`
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to bottom right, 
    rgba(121, 40, 202, 0.03),
    rgba(77, 187, 235, 0.03)
  );

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    background: ${props => props.theme.gradients.accent};
    border-radius: 50%;
    opacity: 0.15;
    transition: all 0.3s ease;
  }

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.8rem;
    margin-bottom: 1rem;
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${props => props.theme.gradients.primary};
      transition: width 0.3s ease;
    }
  }

  ${ServiceCard}:hover h3::after {
    width: 100%;
  }

  p {
    color: ${props => props.theme.colors.text};
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

const services = [
  {
    id: 1,
    title: "Research",
    description: "We conduct comprehensive and evidence-based research to address critical issues in education, disability inclusion and social development. Our research services include needs assessments, baseline studies, impact evaluations and formative research. We utilize both quantitative and qualitative methodologies to gather actionable insights, ensuring that programs and policies are data-driven and effective. Our expertise in statistical analysis and research design helps organizations make informed decisions and achieve measurable outcomes.",
    icon: "/images/services/research.svg"
  },
  {
    id: 2,
    title: "Monitoring, Evaluation, Accountability, and Learning (MEAL)",
    description: "Our MEAL services are designed to ensure that programs are implemented effectively, achieve their intended impact and remain accountable to stakeholders. We develop customized MEAL frameworks to track progress, measure outcomes and identify areas for improvement. Through robust data collection, analysis and reporting, we provide actionable recommendations to enhance program performance. Our MEAL approach also emphasizes learning and adaptation, enabling organizations to continuously refine their strategies for greater impact.",
    icon: "/images/services/meal.svg"
  },
  {
    id: 3,
    title: "Gender, Equality, and Disability Inclusion",
    description: "We are committed to promoting gender equality and disability inclusion across all sectors. Our services include designing and implementing inclusive policies, programs and practices that ensure equal opportunities for all. We work with organizations to address barriers faced by marginalized groups, including women, girls and persons with disabilities. Through advocacy, capacity building and community engagement, we foster environments where diversity is celebrated, and everyone can thrive.",
    icon: "/images/services/inclusion.svg"
  },
  {
    id: 4,
    title: "Education Consultancy (Special Needs Education - SNE)",
    description: "Our Special Needs Education (SNE) consultancy services focus on creating inclusive and supportive learning environments for learners with disabilities. We provide expertise in curriculum adaptation, individualized education plans (IEPs) and assistive technology integration. Our team works with schools, educators and policymakers to develop strategies that enhance access, participation and achievement for learners with diverse needs. We also offer training on inclusive teaching practices and disability awareness.",
    icon: "/images/services/education.svg"
  },
  {
    id: 5,
    title: "Capacity Building",
    description: "We empower organizations and individuals through targeted capacity-building programs. Our training workshops and mentorship initiatives cover a wide range of topics, including project management, MEAL, inclusive education and disability inclusion. By strengthening the skills and knowledge of staff, partners and community stakeholders, we enable organizations to deliver high-quality programs and achieve sustainable impact. Our capacity-building approach is participatory, practical and tailored to meet the unique needs of each client.",
    icon: "/images/services/capacity.svg"
  },
  {
    id: 6,
    title: "Organizational Development",
    description: "We support organizations in achieving their mission and vision through strategic organizational development. Our services include strategic planning, leadership development and process optimization. We work with organizations to enhance their governance structures, improve operational efficiency and build resilient systems. By fostering a culture of innovation and accountability, we help organizations adapt to changing environments and maximize their impact.",
    icon: "/images/services/organization.svg"
  }
];

function Services() {
  return (
    <ServicesSection>
      <ServicesContainer>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </Title>
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <ServiceContent>
              <ServiceIcon>
                <img src={service.icon} alt={service.title} />
              </ServiceIcon>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesContainer>
    </ServicesSection>
  );
}

export default Services; 