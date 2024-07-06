import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../assets/App.css';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Academic from './pages/Academic';

function App() {
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
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
