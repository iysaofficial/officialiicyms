import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Backtotopcomps from './components/Backtotopcomps';

import Landing from './pages/Landing';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Backtotopcomps />
      </Router>
    </>
  );
}

export default App;
