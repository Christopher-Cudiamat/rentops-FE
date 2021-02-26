import React from 'react';
import Navigation from './components/navigation/navigation.container';
import Footer from './components/footer/footer.component';
import Pages from './pages/pages.container';
import {  BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './themeGlobal/themeGlobal';
import Loader from './components/loader/loader.container';




const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Loader/> 
        <Navigation />
        <Pages/>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App;
