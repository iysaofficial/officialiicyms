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

// news

import Listnews from './pages/news/listnews';
import News1 from './pages/news/news1';
import News2 from './pages/news/news2';
import News3 from './pages/news/news3';
import News4 from './pages/news/news4';
import News5 from './pages/news/news5';
import News6 from './pages/news/news6';
import News7 from './pages/news/news7';


// Regist
import HomeIndo from './pages/registration/homeindo';
import HomeRegist from './pages/registration/homeregist';
import HomeInter from './pages/registration/homeinter';
import IndonesiaOffline from './pages/registration/indo-offline';
import IndonesiaOnline from './pages/registration/indo-online';
import InternationalOffline from './pages/registration/inter-offline';
import InternationalOnline from './pages/registration/inter-online';
import ThankYouIndo from './pages/registration/thankyouindo';
import Thankyouinter from './pages/registration/thankyouinter';

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


          {/* news */}
          <Route path="/listnews" element={<Listnews />} />
          <Route path="/news1" element={<News1 />} />
          <Route path="/news2" element={<News2 />} />
          <Route path="/news3" element={<News3 />} />
          <Route path="/news4" element={<News4 />} />
          <Route path="/news5" element={<News5 />} />
          <Route path="/news6" element={<News6 />} />
          <Route path="/news7" element={<News7 />} />

          {/* regist */}
          <Route path="/homeregist" element={<HomeRegist />} />
          <Route path="/homeindo" element={<HomeIndo />} />
          <Route path="/homeinter" element={<HomeInter />} />
          <Route path="/indooffline" element={<IndonesiaOffline />} />
          <Route path="/indoonline" element={<IndonesiaOnline />} />
          <Route path="/interoffline" element={<InternationalOffline />} />
          <Route path="/interonline" element={<InternationalOnline />} />
          <Route path="/thankyouindo" element={<ThankYouIndo />} />
          <Route path="/thankyouinter" element={<Thankyouinter />} />

        </Routes>
        <Backtotopcomps />
      </Router>
    </>
  );
}

export default App;
