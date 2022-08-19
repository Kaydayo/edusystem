import React from 'react';

import './App.css';
import Home from './pages/Home';
import Faq from './pages/Faq'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return <Router>
    <Routes>
      {/* Home */}
      <Route path='/' element={<Home />} />
      <Route path='/faq' element={<Faq/>}/>
    </Routes>
  </Router>;
}

export default App;
