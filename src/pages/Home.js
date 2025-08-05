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

// Lead Magnet CTA Section
const LeadMagnetSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3rem 1.5rem;
  text-align: center;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  margin: 2.5rem auto 2.5rem auto;
  max-width: 900px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 600px) {
    padding: 2rem 0.5rem;
  }
`;
const LeadMagnetHeadline = styled.h2`
  font-size: 2.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.7rem;
  font-weight: 700;
`;
const LeadMagnetSubtext = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;
const WhatsAppButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.9rem 2.2rem;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover {
    background: linear-gradient(135deg, #128c7e 0%, #25d366 100%);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
  }
  
  &:hover::before {
    left: 100%;
  }
`;

// Calendly Booking Section
const CalendlySection = styled.section`
  background: rgba(248, 250, 252, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3rem 1.5rem;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  margin: 2.5rem auto 2.5rem auto;
  max-width: 900px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #7928CA, #4DBBEB, #FF9D66);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.3;
    filter: blur(10px);
  }
`;
const CalendlyTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: 700;
`;
const CalendlyIframeWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  aspect-ratio: 1.5 / 1;
  @media (max-width: 700px) {
    max-width: 100%;
    aspect-ratio: 1 / 1.3;
  }
`;
const CalendlyIframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

// Testimonials Section
const TestimonialsSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3rem 1.5rem;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  margin: 2.5rem auto 2.5rem auto;
  max-width: 900px;
  position: relative;
  
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
    border-radius: 18px;
    z-index: -1;
  }
`;
const TestimonialsTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;
const TestimonialGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
const TestimonialCard = styled.blockquote`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  padding: 1.5rem 1.2rem;
  max-width: 370px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  font-style: italic;
  position: relative;
  margin: 0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.5);
  }
  
  &::after {
    content: '';
    display: block;
    height: 3px;
    width: 60px;
    background: ${({ theme }) => theme.gradients.primary};
    margin: 1rem 0 0 0;
    border-radius: 2px;
  }
  
  footer {
    font-size: 0.98rem;
    color: ${({ theme }) => theme.colors.accent};
    font-style: normal;
    margin-top: 0.7rem;
    font-weight: 600;
  }
`;

// Floating WhatsApp Button
const FloatingWhatsApp = styled.a`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 9999;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #25d366, #128c7e);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3;
    filter: blur(8px);
  }
  
  &:hover {
    background: linear-gradient(135deg, #128c7e 0%, #25d366 100%);
    transform: scale(1.12);
    box-shadow: 0 12px 40px rgba(37, 211, 102, 0.6);
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

      {/* Lead Magnet CTA Section */}
      <LeadMagnetSection>
        <LeadMagnetHeadline>Need Help With Proposals or M&amp;E?</LeadMagnetHeadline>
        <LeadMagnetSubtext>Get a FREE 15-min consultation with our expert team.</LeadMagnetSubtext>
        <WhatsAppButton
          href="https://wa.me/254117330809"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat With Us on WhatsApp
        </WhatsAppButton>
      </LeadMagnetSection>

      {/* Calendly Booking Section */}
      <CalendlySection>
        <CalendlyTitle>Schedule a Session</CalendlyTitle>
        <CalendlyIframeWrapper>
          <CalendlyIframe
            src="https://calendly.com/veritymetric-info/30min"
            title="Book a session with Verity Metrics"
            allow="fullscreen"
          />
        </CalendlyIframeWrapper>
      </CalendlySection>

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

      {/* Testimonials Section */}
      <TestimonialsSection>
        <TestimonialsTitle>What Our Clients Say</TestimonialsTitle>
        <TestimonialGrid>
          <TestimonialCard>
            “Verity Metrics helped us secure major funding. Their proposal support is unmatched.”
            <footer>– NGO Director, Nairobi</footer>
          </TestimonialCard>
          <TestimonialCard>
            “The M&amp;E training session was clear, actionable, and professional.”
            <footer>– Programs Lead, Kisumu</footer>
          </TestimonialCard>
        </TestimonialGrid>
      </TestimonialsSection>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp
        href="https://wa.me/254117330809"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="none"/>
          <path d="M16 6C10.477 6 6 10.477 6 16c0 1.624.43 3.162 1.18 4.49L6 26l5.66-1.16A9.94 9.94 0 0016 26c5.523 0 10-4.477 10-10S21.523 6 16 6zm0 18a7.94 7.94 0 01-4.28-1.26l-.3-.18-3.36.69.69-3.27-.19-.31A7.96 7.96 0 018 16c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.07-6.25c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.93-.34-1.77-1.09-.66-.59-1.1-1.31-1.23-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.07-.11-.5-1.2-.68-1.65-.18-.44-.36-.38-.5-.39-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2.94 2.35.12.15 1.61 2.46 3.9 3.36.55.19.98.3 1.31.38.55.14 1.05.12 1.44.07.44-.07 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.09-.2-.15-.42-.26z" fill="#fff"/>
        </svg>
      </FloatingWhatsApp>
    </main>
  );
}

export default Home; 