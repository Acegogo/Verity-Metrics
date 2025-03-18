import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 8rem 2rem 5rem;
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.08) 0%,
    rgba(77, 187, 235, 0.08) 50%,
    rgba(255, 157, 102, 0.08) 100%
  );
  min-height: 100vh;
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

const ContactContainer = styled.div`
  max-width: 800px;
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

const ContactCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.05) 0%,
    rgba(77, 187, 235, 0.05) 100%
  );
  padding: 3rem;
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.card};
  border: 1px solid rgba(121, 40, 202, 0.2);
  backdrop-filter: blur(10px);
  text-align: center;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.hover},
                ${props => props.theme.shadows.glow};
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 2.5rem;
  
  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.8rem;
    margin-bottom: 1rem;
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: ${props => props.theme.colors.text};
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.1) 0%,
    rgba(77, 187, 235, 0.1) 100%
  );
  transition: all 0.3s ease;
  
  svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: ${props => props.theme.gradients.primary};
    box-shadow: ${props => props.theme.shadows.glow};
    
    svg {
      transform: scale(1.1);
    }
  }
`;

function Contact() {
  return (
    <ContactSection>
      <ContactContainer>
        <Title>Contact Us</Title>
        <ContactCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContactInfo>
            <h3>Get in Touch</h3>
            <p>Get in touch with us today to learn how we can support your organization's goals! Reach out to us through any of these channels:</p>
          </ContactInfo>

          <ContactInfo>
            <h3>Phone & WhatsApp</h3>
            <p>
              <SocialLink 
                href="tel:+254117330809"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +254 117330809
              </SocialLink>
            </p>
          </ContactInfo>

          <ContactInfo>
            <h3>Social Media</h3>
            <SocialLinks>
              <SocialLink 
                href="https://www.facebook.com/profile.php?id=61572181777876"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
                Facebook
              </SocialLink>

              <SocialLink 
                href="https://x.com/MetricsVerity?t=yFererpMMs3UEc1QdUO6rg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
                Twitter
              </SocialLink>

              <SocialLink 
                href="https://wa.me/254117330809"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </SocialLink>

              <SocialLink 
                href="https://www.linkedin.com/company/106668154"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.586v-5.579c0-1.333-.025-3.048-1.853-3.048-1.853 0-2.136 1.446-2.136 2.935v5.692h-3.586V10.999h3.448v1.563h.049c.48-.908 1.653-1.86 3.397-1.86 3.628 0 4.295 2.386 4.295 5.493v5.257zM5.337 9.001c-1.152 0-2.083-.934-2.083-2.083 0-1.151.931-2.083 2.083-2.083 1.151 0 2.083.932 2.083 2.083 0 1.149-.932 2.083-2.083 2.083zm1.793 11.451H3.544V10.999h3.586v9.453zM22.225 0H1.775C.794 0 0 .794 0 1.775v20.451C0 23.206.794 24 1.775 24h20.451C23.206 24 24 23.206 24 22.225V1.775C24 .794 23.206 0 22.225 0z"/>
                </svg>
                LinkedIn
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactInfo>
            <h3>Email</h3>
            <p>
              You can reach us at: 
              <SocialLink 
                href="mailto:veritymetrics@outlook.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                veritymetrics@outlook.com
              </SocialLink>
            </p>
          </ContactInfo>
        </ContactCard>

        
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact; 