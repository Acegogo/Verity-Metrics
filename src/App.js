import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Services from './pages/Services';

const theme = {
  colors: {
    primary: '#7928CA',
    secondary: '#4DBBEB',
    accent: '#FF9D66',
    highlight: '#A2FAEB',
    success: '#66D9A8',
    text: '#2D3748',
    background: '#f8fafc',
    gradient1: '#7928CA',
    gradient2: '#4DBBEB',
    gradient3: '#00E4FF',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #7928CA 0%, #4DBBEB 100%)',
    secondary: 'linear-gradient(135deg, #4DBBEB 0%, #FF9D66 100%)',
    accent: 'linear-gradient(135deg, #00E4FF 0%, #7928CA 100%)',
    card: 'linear-gradient(135deg, rgba(121, 40, 202, 0.08) 0%, rgba(77, 187, 235, 0.08) 100%)',
    success: 'linear-gradient(135deg, #66D9A8 0%, #4DBBEB 100%)',
    glow: 'linear-gradient(135deg, rgba(121, 40, 202, 0.4) 0%, rgba(77, 187, 235, 0.4) 100%)',
  },
  shadows: {
    card: '0 4px 20px rgba(121, 40, 202, 0.15)',
    hover: '0 8px 30px rgba(121, 40, 202, 0.25)',
    glow: '0 0 20px rgba(77, 187, 235, 0.3)',
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif"
  },
  animations: {
    gradient: `
      background-size: 200% 200%;
      animation: gradient 5s ease infinite;
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 