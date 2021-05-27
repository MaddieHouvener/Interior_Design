import { Router } from '@reach/router';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './views/Index';
import Projects from './views/Projects';
import About from './views/About';
import Services from './views/Services';
import Contact from './views/Contact';
import Footer from './components/Footer';

function App() {


  return (
    <Router>
      <Index path="/" />
      <Projects path="/projects" />
      <Services path="/services" />
      <About path="/about" />
      <Contact path="/contact" />
      <Footer path="/projects" />
    </Router>
  );
}

export default App;
