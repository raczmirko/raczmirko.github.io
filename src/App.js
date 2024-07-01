import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={createTheme({palette: {mode: 'dark'}})}>
      <CssBaseline/>
      <Sidebar/>
      <Box className="pageBody">
        <Routes>
          <Route path="/" 
            element={<Home/>}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
