import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/navigation/navigation.component';
import Navigation from './components/navigation/navigation.component';
import Pages from './components/pages/pages.component';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';




function App() {

  
  
  return (
    <div>

      <Router>

        <Navigation />
        <Link to="/signIn">
          <button >Sign In!</button>
        </Link>
        <Link to="/signUp">
          <button >Sign Up!</button>
        </Link>

        <Pages />

        <Footer />

      </Router>

    </div>
  )
}

export default App;
