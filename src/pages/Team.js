import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.05) 0%,
    rgba(255, 0, 128, 0.05) 100%
  );
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.card};
  overflow: hidden;
  margin-bottom: 3rem;
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

const MemberInfo = styled.div`
  padding: 2.5rem 2.5rem 0;
  background: linear-gradient(
    to bottom right,
    rgba(121, 40, 202, 0.05),
    rgba(77, 187, 235, 0.05)
  );

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
    opacity: 0.9;
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
          <MemberInfo>
            <h3>Fondo Hassan</h3>
            <div className="position">Special Needs Education Expert & Researcher</div>
            <Expertise>
              <h4>Areas of Expertise</h4>
              <ul>
                <ExpertiseTag>Special Needs Education</ExpertiseTag>
                <ExpertiseTag>Research</ExpertiseTag>
                <ExpertiseTag>MEAL</ExpertiseTag>
                <ExpertiseTag>Assistive Technology</ExpertiseTag>
                <ExpertiseTag>Play-based Therapy</ExpertiseTag>
                <ExpertiseTag>Early Screening</ExpertiseTag>
              </ul>
            </Expertise>
          </MemberInfo>
          <DirectorBio>
            <p>
              Fondo Hassan is a dedicated educationist and researcher with over 5 years of experience in inclusive education, program evaluation and disability inclusion. Specializing in Special Needs Education (SNE), Fondo has a proven track record of designing and implementing research projects, developing individualized education plans and integrating assistive technology to support learners with disabilities.
            </p>
            <p>
              As a Technical Working Group Member with the Clinton Health Access Initiative (CHAI), Fondo has led play-based therapy interventions and early screening initiatives for children with disabilities, ensuring timely and tailored support. He has also coordinated the distribution of educational and therapeutic toys, promoting inclusive play and development in schools and community centers.
            </p>
            <p>
              Fondo's expertise extends to Monitoring, Evaluation, Accountability and Learning (MEAL), where he has developed frameworks to assess program effectiveness and drive data-driven decision-making. His work has empowered caregivers and educators through training and capacity-building initiatives, fostering inclusive learning environments.
            </p>
            <Achievements>
              <h4>Key Achievements</h4>
              <ul>
                <li>Integrating assistive technology into play therapy, enhancing accessibility for children with disabilities.</li>
                <li>Leading early screening efforts to identify and support children with diverse needs.</li>
                <li>Publishing research on inclusive education and curriculum implementation in schools for the deaf.</li>
              </ul>
            </Achievements>
            <p>
              Fondo holds a Master's in Education (ongoing) from Maseno University and a Bachelor's in Special Needs Education with IT. His passion for equity and inclusion, combined with his technical expertise, makes him a valuable asset to Verity Metrics International.
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
              Gabriel holds a Master's in Human Resources Management (ongoing) and a Bachelor's in Education (Arts) from the University of Nairobi. His expertise spans project coordination, advocacy and emergency response, making him a valuable asset to Verity Metrics International.
            </p>
          </DirectorBio>
        </TeamMemberCard>

        {/* Abraham's Card */}
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
      </TeamContainer>
    </TeamSection>
  );
}

export default Team; 