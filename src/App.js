import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';


function App() {
  return (
    <ThemeProvider theme={createTheme({palette: {mode: 'dark'}})}>
      <CssBaseline/>
      <Sidebar/>
      <Routes>
        <Route path="/" 
          element={<Home/>}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
