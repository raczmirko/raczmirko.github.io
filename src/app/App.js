import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactGA from 'react-ga4';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../assets/App.css';
import Sidebar from '../components/common/Sidebar';
import About from './pages/About';
import Academic from './pages/Academic';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Skills from './pages/Skills';
import { useEffect } from 'react';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
};


const App = () => {
  usePageTracking();

  return (
    <ThemeProvider theme={createTheme({palette: {mode: 'dark'}})}>
      <CssBaseline/>
      <Sidebar/>
      <Box className="page-body">
        <Routes>
          <Route path="/" 
            element={<Home/>}
          />
          <Route path="/contact" 
            element={<Contact/>}
          />
          <Route path="/academic" 
            element={<Academic/>}
          />
          <Route path="/skills" 
            element={<Skills/>}
          />
          <Route path="/about" 
            element={<About/>}
          />
          <Route path="/resources" 
            element={<Resources/>}
          />
          <Route path="/projects" 
            element={<Projects/>}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
