import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Page = styled.main`
  padding-top: 80px;
`;

const Hero = styled.section`
  position: relative;
  min-height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(
      135deg,
      rgba(121, 40, 202, 0.55),
      rgba(77, 187, 235, 0.55)
    ),
    url('/images/verity academy/WhatsApp Image 2025-08-10 at 08.00.56_7ecef4ea.jpg');
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  max-width: 1000px;
`;

// New content background section inspired by Services page
const ContentBG = styled.section`
  position: relative;
  padding: 4rem 0 3rem;
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.08) 0%,
    rgba(77, 187, 235, 0.08) 50%,
    rgba(255, 157, 102, 0.08) 100%
  );
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.theme.gradients.primary};
    opacity: 0.35;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/images/verity academy/WhatsApp Image 2025-08-10 at 08.00.56_0f4f80d6.jpg') center/cover no-repeat;
    opacity: 0.05;
    pointer-events: none;
  }
`;

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  position: relative;
`;

const Section = styled(motion.section)`
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  font-size: 1.15rem;
  opacity: 0.95;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  color: ${p => p.theme.colors.primary};
  margin-bottom: 1rem;
`;

const BulletList = styled.ul`
  list-style: none;
  padding-left: 1.2rem;
  li { position: relative; margin-bottom: 0.6rem; }
  li::before { content: '•'; position: absolute; left: -1.2rem; color: ${p => p.theme.colors.primary}; }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 0.9rem 1.6rem;
  border-radius: 10px;
  background: ${p => p.theme.gradients.secondary};
  color: #fff;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.25); }
`;

const ContactRow = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

function VerityAcademy() {
  return (
    <Page>
      <Helmet>
        <title>Verity Academy – GCSE Online Tutoring for Global Learners</title>
        <meta name="description" content="Join Verity Academy for expert GCSE online tutoring across all subjects. Flexible schedules, tailored lessons and safeguarding standards for academic success." />
      </Helmet>

      <Hero>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Verity Academy – GCSE Online Tutoring for Global Learners</Title>
          <SubTitle>Personalized learning. Global reach. Academic success.</SubTitle>
        </HeroContent>
      </Hero>

      <ContentBG>
        <Container>
          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <H2>About Verity Academy</H2>
            <p>
              Verity Academy delivers high-quality, fully online GCSE tutoring for learners worldwide. Our mission is to empower students with tailored learning plans, measurable progress, and the confidence to excel.
              We support students following the GCSE curriculum across the UK, Europe, and international schools globally — all through accessible, flexible online lessons.
            </p>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <H2>Key Features</H2>
            <BulletList>
              <li>Expert Tutors – Certified and experienced educators.</li>
              <li>Tailored Lesson Plans – Customized to each student's pace and goals.</li>
              <li>Full GCSE Subject Coverage – Math, Sciences, English, Humanities, Languages and more.</li>
              <li>Flexible Scheduling – Lessons arranged to suit different time zones.</li>
              <li>Child Safeguarding Policies – Adhering to international standards.</li>
              <li>Regular Progress Reports – Parents kept informed.</li>
            </BulletList>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <H2>How It Works</H2>
            <BulletList>
              <li>Step 1: Book a free consultation via Calendly.</li>
              <li>Step 2: We assess the learner’s needs.</li>
              <li>Step 3: Assign the best-fit tutor and create a learning plan.</li>
              <li>Step 4: Start lessons with continuous monitoring and feedback.</li>
            </BulletList>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <H2>Ready to Get Started?</H2>
            <CTAButton href="https://calendly.com/veritymetric-info/30min" target="_blank" rel="noopener noreferrer">Book Your Free Consultation</CTAButton>
            <ContactRow>
              <a href="mailto:info@veritymetric.com">info@veritymetric.com</a>
              <a href="tel:+254117330809">+254 117330809</a>
              <a href="https://wa.me/254117330809" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </ContactRow>
          </Section>
        </Container>
      </ContentBG>
    </Page>
  );
}

export default VerityAcademy;
