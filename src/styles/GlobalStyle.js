import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
    background: linear-gradient(
      135deg,
      ${props => props.theme.colors.background} 0%,
      rgba(99, 102, 241, 0.05) 25%,
      rgba(192, 132, 252, 0.05) 50%,
      rgba(96, 165, 250, 0.05) 75%,
      ${props => props.theme.colors.background} 100%
    );
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  /* Glassy effect for all cards and containers */
  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  }

  /* Enhanced glassy effect for premium elements */
  .premium-glass {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 8px 32px rgba(31, 38, 135, 0.37),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  /* Floating animation for premium elements */
  .float-animation {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  /* Glow effect for interactive elements */
  .glow-effect {
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 
        0 0 20px rgba(121, 40, 202, 0.3),
        0 0 40px rgba(77, 187, 235, 0.2);
    }
  }

  /* Shimmer effect for loading states */
  .shimmer {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Enhanced focus states for accessibility */
  *:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      135deg,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.secondary}
    );
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      135deg,
      ${props => props.theme.colors.secondary},
      ${props => props.theme.colors.primary}
    );
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 600;
  }

  /* Enhanced text selection */
  ::selection {
    background: ${props => props.theme.colors.primary};
    color: white;
  }

  /* Loading animation for images */
  img {
    transition: opacity 0.3s ease;
  }

  img[loading] {
    opacity: 0;
  }

  img.loaded {
    opacity: 1;
  }
`;

export default GlobalStyle; 