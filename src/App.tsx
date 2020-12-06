import React from 'react';
import Navigation from './components/navigation/navigation.component';
import Pages from './components/pages/pages.component';
import Footer from './components/footer/footer.component';
import {  BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styledComponents/themeGlobal';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation />
        <Pages />
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App;
