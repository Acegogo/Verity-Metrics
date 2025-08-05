import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FondoHassanImg from '../assets/images/Fondo_Hassan.jpg';
import GabrielMureithiImg from '../assets/images/Gabriel_Mureithi.jpg';
import EvansOchiengImg from '../assets/images/Evans_Ochieng.jpg';

const TeamSection = styled.section`
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
    opacity: 0.3;
  }
`;

const TeamContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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

const TeamMemberCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  overflow: hidden;
  margin-bottom: 3rem;
  position: relative;
  transition: all 0.3s ease;

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
    z-index: -1;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.5);
    border-color: ${props => props.theme.colors.accent};
  }
`;

const MemberInfo = styled.div`
  padding: 2.5rem 2.5rem 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 0.5rem;
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .position {
    color: ${props => props.theme.colors.secondary};
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }
`;

const DirectorBio = styled.div`
  padding: 0 2.5rem 2.5rem;
  background: linear-gradient(
    to bottom right, 
    rgba(121, 40, 202, 0.03),
    rgba(255, 107, 43, 0.03)
  );

  p {
    color: ${props => props.theme.colors.text};
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const Expertise = styled.div`
  margin-bottom: 2rem;

  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
`;

const ExpertiseTag = styled(motion.li)`
  display: inline-block;
  margin: 0.3rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.gradients.primary};
  ${props => props.theme.animations.gradient};
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const Achievements = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.08) 0%,
    rgba(255, 0, 128, 0.08) 100%
  );
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.card};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${props => props.theme.shadows.hover};
  }

  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      color: ${props => props.theme.colors.text};
      padding-left: 1.5rem;
      position: relative;
      margin-bottom: 1rem;
      line-height: 1.6;

      &:before {
        content: "•";
        color: ${props => props.theme.colors.highlight};
        position: absolute;
        left: 0;
        font-weight: bold;
      }

      &:hover {
        color: ${props => props.theme.colors.primary};
        transform: translateX(5px);
        transition: all 0.3s ease;
      }
    }
  }
`;

const AnimatedImage = styled(motion.img)`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(121,40,202,0.12);
  border: 3px solid rgba(121, 40, 202, 0.2);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 8px 24px rgba(121,40,202,0.2);
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(121,40,202,0.1), rgba(77,187,235,0.1));
    z-index: -1;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }
`;

function Team() {
  return (
    <TeamSection>
      <TeamContainer>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Team
        </Title>
        
        {/* Director Card */}
        <TeamMemberCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <ImageContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 200
            }}
          >
            <AnimatedImage
              src={FondoHassanImg}
              alt="Fondo Hassan"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </ImageContainer>
          <MemberInfo>
            <h3>FONDO K HASSAN</h3>
            <div className="position">
              Inclusive Education | Disability Advocacy | Program Strategy | MEAL | Research & Policy Influence
            </div>
            <Expertise>
              <h4>Current Roles</h4>
              <ul>
                <ExpertiseTag>Founder and Executive Director | Verity Metrics International Limited</ExpertiseTag>
                <ExpertiseTag>Project Officer | Centre for Education Policy and Climate Justice (CEPCJ)</ExpertiseTag>
                <ExpertiseTag>Lead Trainer – Core Life Skills | We Can Work Program</ExpertiseTag>
              </ul>
            </Expertise>
          </MemberInfo>
          <DirectorBio>
            <p>
              Fondo Hassan is a visionary leader, strategist and advocate for inclusive development with a mission to transform lives through innovation, research and empowerment. As the Founder and Executive Director of Verity Metrics International Limited, Fondo has built a dynamic platform that delivers cutting-edge research, policy advisory, monitoring and evaluation and inclusive development solutions across Africa.
            </p>
            <p>
              Driven by an unwavering commitment to social justice and equity, Fondo has led impactful initiatives spanning inclusive education, disability rights, health systems strengthening and climate-resilient development. His work has shaped transformative programs with organizations such as the Clinton Health Access Initiative's Building a World of Play initiative, where he pioneered early childhood disability screening, assistive technology integration and inclusive therapeutic play interventions that have reached hundreds of children with disabilities across Kenya.
            </p>
            <p>
              Internationally, Fondo has coordinated inclusive remote learning programs through Student World in the United Kingdom, designing innovative, accessible education models for neurodivergent students. As a Lead Trainer for Core Life Skills under the We Can Work Program, he builds the employment readiness and social empowerment capacities of young persons with disabilities, positioning them for leadership and economic independence.
            </p>
            <p>
              Fondo's expertise spans inclusive education program design, disability advocacy, Monitoring, Evaluation, Accountability and Learning (MEAL), project management, research design, policy influence, grant and proposal development and multi-stakeholder engagement. He has worked extensively across Kenya, delivering results-driven programs in Nairobi, Turkana, Kilifi, Kiambu, Central Kenya and Machakos and enabling grassroots organizations to secure critical funding from global donors, including the Government of Ireland and the Issroff Family Foundation.
            </p>
            <p>
              Currently, Fondo also serves as a Project Officer at the Centre for Education Policy and Climate Justice (CEPCJ), where he champions the integration of education reform with climate justice advocacy, ensuring marginalized communities are centered in national policy dialogues.
            </p>
            <p>
              Fondo holds a Master's Degree and a Bachelor's Degree in Special Needs Education from Maseno University, alongside a Diploma in Monitoring and Evaluation from Kenyatta University. His rare blend of visionary leadership, technical expertise and grassroots experience makes him not just a consultant, but a catalyst for lasting change. Through Verity Metrics International Limited, Fondo continues to inspire a new era of inclusive, evidence-driven development in Africa and beyond.
            </p>
          </DirectorBio>
        </TeamMemberCard>

        {/* Gabriel's Card */}
        <TeamMemberCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <ImageContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 200
            }}
          >
            <AnimatedImage
              src={GabrielMureithiImg}
              alt="Gabriel Mureithi"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </ImageContainer>
          <MemberInfo>
            <h3>Gabriel Mureithi</h3>
            <div className="position">Project Management & Child Protection Expert</div>
            <Expertise>
              <h4>Areas of Expertise</h4>
              <ul>
                <ExpertiseTag>Project Management</ExpertiseTag>
                <ExpertiseTag>Child Protection</ExpertiseTag>
                <ExpertiseTag>Safeguarding</ExpertiseTag>
                <ExpertiseTag>HR Management</ExpertiseTag>
                <ExpertiseTag>GBV Prevention</ExpertiseTag>
                <ExpertiseTag>Policy Development</ExpertiseTag>
              </ul>
            </Expertise>
          </MemberInfo>
          <DirectorBio>
            <p>
              Gabriel Mureithi is a seasoned professional with over 16 years of experience in international non-governmental organizations (INGOs), specializing in Child Protection, Project Management and Human Resources & Administration. With a strong commitment to safeguarding vulnerable children and advocating for their rights, Gabriel has led high-impact projects focused on accountability, quality education and gender-based violence (GBV) prevention.
            </p>
            <p>
              Gabriel excels in cross-sector collaboration, having successfully built partnerships between organizations like World Vision Kenya and the Judiciary to enhance child protection services. He is also skilled in capacity building, having mentored graduate interns and trained staff on critical topics such as safeguarding, occupational safety and mental health.
            </p>
            <Achievements>
              <h4>Key Achievements</h4>
              <ul>
                <li>Authoring the Kilifi County GBV Policy (2024).</li>
                <li>Reviewing the Kenya National Guidelines for Child Protection in Emergencies (2023).</li>
                <li>Establishing innovative child protection initiatives recognized as best practices in the region.</li>
              </ul>
            </Achievements>
            <p>
              Gabriel holds a Master's in Human Resources Management and a Bachelor's in Education (Arts) from the University of Nairobi. His expertise spans project coordination, advocacy and emergency response, making him a valuable asset to Verity Metrics International.
            </p>
          </DirectorBio>
        </TeamMemberCard>

        {/* Evans' Card */}
        <TeamMemberCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <ImageContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 200
            }}
          >
            <AnimatedImage
              src={EvansOchiengImg}
              alt="Evans Ochieng Nudih"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </ImageContainer>
          <MemberInfo>
            <h3>EVANS OCHIENG NUDIH</h3>
            <div className="position">
              Senior Research & Policy Specialist | Monitoring & Evaluation Expert | Health & Social Policy Analyst
            </div>
            <Expertise>
              <h4>Current Role</h4>
              <ul>
                <ExpertiseTag>Team Member, Verity Metrics International Limited</ExpertiseTag>
              </ul>
            </Expertise>
          </MemberInfo>
          <DirectorBio>
            <p>
              Evans Ochieng Nudih is a seasoned Senior Research and Policy Specialist with over 15 years of experience in research, monitoring and evaluation (M&E), health policy, economic analysis and project management. He holds a Bachelor of Arts degree in Economics and Political Science from the University of Nairobi. Evans began his career at the Ministry of Planning and National Development, where he contributed to the preparation of Kenya's Third Annual Progress Report of the Economic Recovery Strategy (ERS) and the Public Expenditure Review (PER) 2007. He also supported the implementation of the National Integrated Monitoring and Evaluation System (NIMES), gaining valuable expertise in national development tracking and policy evaluation.
            </p>
            <p>
              From 2008 to 2012, Evans worked at Disabled for Education and Economic Development (DEEDS) Kenya as a Senior Program Officer, Monitoring and Evaluation, where he strengthened partnerships with government and civil society, led compliance monitoring and enhanced organizational visibility through evidence-based reporting. He currently serves as a Research Officer seconded to the Chairperson of the Health Committee at the National Assembly of Kenya, providing technical research support, policy analysis and legislative advisory services to influence health sector reforms.
            </p>
            <p>
              Evans brings to Verity Metrics International Limited a strong background in research design, monitoring and evaluation, health policy development, project risk management and strategic partnership building. His extensive experience across government, non-governmental organizations and parliamentary institutions positions him as a valuable contributor to Verity Metrics' mission of "Innovating Solutions, Inspiring Global Change."
            </p>
          </DirectorBio>
        </TeamMemberCard>

        {/* Abraham's Card */}
        <TeamMemberCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <MemberInfo>
            <h3>Abraham Shivachi</h3>
            <div className="position">Education Specialist & Leadership Coach</div>
            <Expertise>
              <h4>Areas of Expertise</h4>
              <ul>
                <ExpertiseTag>Education Specialist</ExpertiseTag>
                <ExpertiseTag>Leadership Coaching</ExpertiseTag>
                <ExpertiseTag>Project Management</ExpertiseTag>
                <ExpertiseTag>Curriculum Development</ExpertiseTag>
                <ExpertiseTag>Teacher Training</ExpertiseTag>
                <ExpertiseTag>Educational Technology</ExpertiseTag>
              </ul>
            </Expertise>
          </MemberInfo>
          <DirectorBio>
            <p>
              Abraham Shivachi is a highly accomplished Education Specialist with over 20 years of experience in improving learner performance, teacher training and school leadership development. His expertise lies in school quality assessment, curriculum development and educational technology integration, particularly in underserved areas. Abraham has a proven track record of driving sustainable education impact through innovative strategies and cross-functional collaboration.
            </p>
            <p>
              As a Leadership Coach with the Transforming Schooling into Learning (TSIL) project, Abraham has delivered professional development to school leaders and teacher mentors, enhancing leadership skills and fostering inclusive school cultures. He has also coordinated large-scale education projects, such as the KIX IDRC Global Partnership in Education Project and the LEGO Foundation's Learning through Play Project, achieving measurable improvements in student outcomes.
            </p>
            <Achievements>
              <h4>Key Achievements</h4>
              <ul>
                <li>Training and mentoring over 64 school leaders and 96 teachers to improve learning outcomes for 2,400+ learners.</li>
                <li>Representing World Vision Kenya at the 21st Conference of Commonwealth Education Ministers, showcasing best practices in child learning.</li>
                <li>Developing and implementing teacher training programs, curriculum workshops and community outreach initiatives.</li>
              </ul>
            </Achievements>
            <p>
              Abraham holds a Bachelor's in Early Childhood Studies and Primary Education from Mount Kenya University and is fluent in English and Swahili. His passion for education, combined with his strategic planning and leadership skills, makes him an invaluable member of the Verity Metrics International team.
            </p>
          </DirectorBio>
        </TeamMemberCard>

        {/* Daniel Kheri Kazungu's Card */}
        <TeamMemberCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <MemberInfo>
            <h3>Daniel Kheri Kazungu</h3>
            <div className="position">MEAL Specialist & Program Development Expert</div>
            <Expertise>
              <h4>Areas of Expertise</h4>
              <ul>
                <ExpertiseTag>Monitoring & Evaluation</ExpertiseTag>
                <ExpertiseTag>Program Development</ExpertiseTag>
                <ExpertiseTag>Data-Driven Decision Making</ExpertiseTag>
                <ExpertiseTag>Accountability</ExpertiseTag>
                <ExpertiseTag>Capacity Building</ExpertiseTag>
                <ExpertiseTag>Humanitarian Response</ExpertiseTag>
              </ul>
            </Expertise>
          </MemberInfo>
          <DirectorBio>
            <p>
              Daniel Kheri Kazungu is a highly skilled Monitoring, Evaluation, Accountability and Learning (MEAL) specialist with over seven years of experience in the humanitarian and development sector. He has successfully led MEAL processes for large-scale programs, working across Kenya, Ethiopia and Sudan to enhance data-driven decision-making and program accountability.
            </p>
            <p>
              <strong>What Sets Him Apart?</strong>

               Daniel has played a pivotal role in designing and implementing MEAL frameworks for multi-million-dollar interventions in areas such as nutrition, WASH, livelihoods, cash assistance and child protection. As a MEAL Coordinator at World Vision Kenya, he has provided leadership in program evaluations, impact assessments and donor engagement, significantly contributing to the expansion of the USAID BHA portfolio in Kenya.
            </p>
            <p>
              With a B.Sc. in Project Planning and Management and a Master's in Community Development, Daniel is also certified in disaster management, humanitarian response and cash & voucher assistance programming. His expertise in capacity building, program reporting and MEAL system design makes him a trusted leader in development work.
            </p>
          </DirectorBio>
        </TeamMemberCard>
      </TeamContainer>
    </TeamSection>
  );
}

export default Team; 
