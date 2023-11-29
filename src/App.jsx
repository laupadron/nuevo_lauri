import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import React, { useState } from 'react';


function App() {
  
  return (
    <HashRouter>
      <div className="app-container" >
       
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
        
        </Routes>
       
      </div> 
      </HashRouter>
  )
}

export default App
