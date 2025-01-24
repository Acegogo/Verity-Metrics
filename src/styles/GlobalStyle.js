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
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 600;
  }
`;

export default GlobalStyle; 