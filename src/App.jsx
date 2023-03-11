import { useState } from 'react'
import { ThemeProvider } from '@mui/material';
import Header from './components/Header/Header'

import lightTheme from './Themes/Theme';
import Home from './Pages/Home/Home';
function App() {
 
  return (
    <ThemeProvider theme={lightTheme}>
      <>
      <Home/>
      </>
      
    </ThemeProvider>
  );
};

export default App
