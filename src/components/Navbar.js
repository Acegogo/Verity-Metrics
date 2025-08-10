import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 8px 32px rgba(31, 38, 135, 0.37)' : 'none'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(121, 40, 202, 0.9),
      rgba(77, 187, 235, 0.9)
    );
    z-index: -1;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 12px;
  height: 100%;

  img {
    height: 55px;
    width: auto;
    object-fit: contain;
    padding: 2px 0;
    display: block;
  }

  @media (max-width: 480px) {
    img {
      height: 45px;
    }
  }
`;

const LogoText = styled.span`
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2px 0;
  
  small {
    font-size: 0.9rem;
    opacity: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.gradients.secondary};
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    
    small {
    font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    
    small {
      font-size: 0.75rem;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
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
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &.active {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.8rem;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: linear-gradient(
    135deg,
    rgba(121, 40, 202, 0.98),
    rgba(77, 187, 235, 0.98)
  );
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.15);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  ${NavLink} {
    width: 100%;
    padding: 0.8rem;
    text-align: center;
    border-radius: 8px;
    transition: all 0.3s ease;
    
    &:hover {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(192, 132, 252, 0.1));
      transform: translateY(-2px);
    }

    &.active {
      background: ${props => props.theme.gradients.secondary};
      color: white;
    }
  }
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo to="/">
          <img src="/images/logo.svg" alt="Verity Metrics International" />
          <LogoText>
            Verity Metrics
            <small>International</small>
          </LogoText>
        </Logo>

        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </NavLink>
          <NavLink to="/services" className={location.pathname === '/services' ? 'active' : ''}>
            Services
          </NavLink>
          <NavLink to="/team" className={location.pathname === '/team' ? 'active' : ''}>
            Team
          </NavLink>
          <NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            Projects
          </NavLink>
          <NavLink to="/verity-academy" className={location.pathname === '/verity-academy' ? 'active' : ''}>
            Verity Academy
          </NavLink>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </NavLink>
        </NavLinks>

        <MobileMenuButton 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '×' : '☰'}
        </MobileMenuButton>

        <MobileMenu isOpen={mobileMenuOpen}>
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" onClick={() => setMobileMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/team" onClick={() => setMobileMenuOpen(false)}>
            Team
          </NavLink>
          <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/verity-academy" onClick={() => setMobileMenuOpen(false)}>
            Verity Academy
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </NavLink>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;