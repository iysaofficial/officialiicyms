import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Backtotopcomps from './components/Backtotopcomps';

import Landing from './pages/Landing';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Lowtahun from './pages/low/lowtahun';
import Kategori23 from './pages/low/2023/kategori23';
import Jenjangofl23 from './pages/low/2023/jenjangofl23';
import Jenjangonl23 from './pages/low/2023/jenjangonl23';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/lowtahun" element={<Lowtahun />} />
          <Route path="/kategori23" element={<Kategori23 />} />
          <Route path="/jenjangofl23" element={<Jenjangofl23 />} />
          <Route path="/jenjangonl23" element={<Jenjangonl23 />} />
        </Routes>
        <Backtotopcomps />
      </Router>
    </>
  );
}

export default App;
