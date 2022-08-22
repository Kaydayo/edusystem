
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Faq from './pages/Faq'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from './pages/Signup';
import CompanyOnBoarding from './pages/CompanyOnBoarding';
import Dashboard from './pages/Dashboard';
import Bio from './layouts/Dashboard/Bio';
import Courses from './layouts/Dashboard/Courses';
import BoardEmployee from './layouts/Dashboard/BoardEmployee';
import Team from './layouts/Dashboard/Team';
import Report from './layouts/Dashboard/Report';
import Subscription from './layouts/CompanyForms/Subscription';
import Payments from './layouts/Dashboard/Payments';

function App() {
  return <Router>
    <Routes>
      {/* Home */}
      <Route path='/' element={<Home />} />

      <Route  path='faq' element={<Faq />} />


      <Route path='signup' element={<Signup />} />
      <Route path='company-onboarding' element={<CompanyOnBoarding />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path="bio" element={<Bio />} />
        <Route path="courses" element={<Courses />} />
        <Route path="employees" element={<BoardEmployee />} />
        <Route path="teams" element={<Team />} />
        <Route path="report" element={<Report />} />
        <Route path="subscription" element={<Payments />} />
      </Route>
       
      
    </Routes>
  </Router>
}

export default App;
