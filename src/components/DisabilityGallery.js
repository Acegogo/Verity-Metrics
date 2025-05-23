import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.95);
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? props.theme.colors.primary : '#ccc'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const slides = [
  {
    id: 1,
    image: '/images/projects/disability-inclusion-1.jpg',
    alt: 'Disability inclusion workshop at St. Margaret School'
  },
  {
    id: 2,
    image: '/images/projects/disability-inclusion-2.jpg',
    alt: 'Interactive session with teachers and students'
  },
  {
    id: 3,
    image: '/images/projects/disability-inclusion-3.jpg',
    alt: 'Group discussion on inclusive education'
  },
  {
    id: 4,
    image: '/images/projects/disability-inclusion-4.jpg',
    alt: 'Workshop participants engaging in activities'
  }
];

const DisabilityGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <GalleryContainer>
      <SlideContainer>
        <AnimatePresence mode="wait">
          <Slide
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
            />
          </Slide>
        </AnimatePresence>

        <NavigationButton className="prev" onClick={prevSlide}>
          ←
        </NavigationButton>
        <NavigationButton className="next" onClick={nextSlide}>
          →
        </NavigationButton>
      </SlideContainer>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotsContainer>
    </GalleryContainer>
  );
};

export default DisabilityGallery; 