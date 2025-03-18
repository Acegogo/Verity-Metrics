import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(
    to right,
    rgba(121, 40, 202, 0.4),
    rgba(77, 187, 235, 0.3),
    rgba(255, 157, 102, 0.3)
  ),
  url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920');
  background-size: cover;
  background-position: center;
`;

const ContentSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.08) 0%,
    rgba(77, 187, 235, 0.08) 50%,
    rgba(255, 157, 102, 0.08) 100%
  );
  position: relative;
  
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

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  .text-container {
    background: rgba(0, 0, 0, 0.2);
    padding: 2rem;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    display: inline-block;
  }
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  font-weight: 700;
  
  span {
    background: ${props => props.theme.gradients.secondary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 800px;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.accent};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: ${props => props.theme.gradients.secondary};
  ${props => props.theme.animations.gradient};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(121, 40, 202, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const Section = styled.div`
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      background: ${props => props.theme.gradients.secondary};
    }
  }
  
  p {
    color: ${props => props.theme.colors.text};
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.05) 0%,
    rgba(77, 187, 235, 0.05) 100%
  );
  padding: 2rem;
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.card};
  border: 1px solid rgba(79, 70, 229, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.8rem;
      padding-left: 1.5rem;
      position: relative;
      
      &:before {
        content: "•";
        color: ${props => props.theme.colors.highlight};
        position: absolute;
        left: 0;
        font-weight: bold;
      }
    }
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.hover};
    transform: translateY(-5px);
    border-color: ${props => props.theme.colors.accent};
  }
`;

const ValueCard = styled(motion.div)`
  background: ${props => props.theme.gradients.card};
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.card};
  border: 1px solid rgba(79, 70, 229, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.hover};
    transform: translateY(-5px);
    border-color: ${props => props.theme.colors.accent};
  }
`;

function Home() {
  return (
    <main>
      <HeroSection>
        <HeroContent>
          <div className="text-container">
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to <span>Verity Metrics International</span>
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Innovating Solutions, Inspiring Global Change
            </Subtitle>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CTAButton to="/contact">Get Started</CTAButton>
            </motion.div>
          </div>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <MainContent>
          <Section>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              At Verity Metrics International, we empower organizations to measure success, deliver value and drive sustainable change through innovative research, monitoring, evaluation and learning (RMEL) solutions. Our name reflects our commitment to truth (Verity), precision (Metrics) and a global perspective (International) that ensures impactful outcomes worldwide.
            </motion.p>
          </Section>

          <Section>
            <h2>Who We Are</h2>
            <p>We are a forward-thinking consultancy dedicated to helping organizations optimize their impact, enhance transparency and make data-driven decisions. With years of experience in local and international development sectors, we specialize in:</p>
            <Grid>
              {[
                "Research & Analytics",
                "Monitoring & Evaluation (M&E)",
                "Disability Inclusion & Gender Equality",
                "Capacity Building & Organizational Development",
                "Education Consultancy (Special Needs Education)"
              ].map((specialty, index) => (
                <Card
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3>{specialty}</h3>
                </Card>
              ))}
            </Grid>
          </Section>

          <Section>
            <h2>Why Choose Us?</h2>
            <Grid>
              <Card
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3>Our Strengths</h3>
                <ul>
                  <li>Tailored Solutions: We design customized frameworks to meet your unique needs.</li>
                  <li>Global Expertise: Our work spans diverse sectors and regions, ensuring adaptable and impactful results.</li>
                  <li>Commitment to Inclusion: We prioritize disability inclusion, gender equality and social equity in all our projects.</li>
                  <li>Proven Impact: We deliver measurable, transformative outcomes that drive positive change.</li>
                </ul>
              </Card>
            </Grid>
          </Section>

          <Section>
            <h2>Our Core Values</h2>
            <Grid>
              {[
                { title: "Integrity", desc: "We uphold honesty and transparency in everything we do." },
                { title: "Excellence", desc: "We strive for perfection through high-quality, professional services." },
                { title: "Innovation", desc: "We embrace cutting-edge tools and methodologies." },
                { title: "Collaboration", desc: "We work hand-in-hand with clients to achieve shared success." },
                { title: "Inclusivity", desc: "We champion diversity and equity in all our work." },
                { title: "Impact", desc: "We focus on delivering tangible, sustainable results." }
              ].map((value, index) => (
                <ValueCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </ValueCard>
              ))}
            </Grid>
          </Section>

          <Section>
            <h2>Let's Drive Change Together</h2>
            <p>Whether you're looking to measure program success, enhance organizational capacity or foster inclusivity, Verity Metrics International is here to help. Let us turn your data into actionable insights and transform your vision into reality.</p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginTop: '2rem' }}
            >
              <CTAButton to="/contact">Contact Us Today</CTAButton>
            </motion.div>
          </Section>
        </MainContent>
      </ContentSection>
    </main>
  );
}

export default Home; 