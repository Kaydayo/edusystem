import React from 'react';

import './App.css';
import Home from './pages/Home';
import Faq from './pages/Faq'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from './pages/Signup';
import CompanyOnBoarding from './pages/CompanyOnBoarding';

function App() {
  return <Router>
    <Routes>
      {/* Home */}
      <Route path='/' element={<Home />} />

      <Route  path='faq' element={<Faq />} />


      <Route path='signup' element={<Signup />} />
      <Route path='company-onboarding' element={<CompanyOnBoarding />} />
    </Routes>
  </Router>;
}

export default App;
