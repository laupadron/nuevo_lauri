import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  function toggleModoOscuro() {
    setModoOscuro(!modoOscuro);
  }
  
  return (
    <HashRouter  >
      <div className={`app-container ${modoOscuro ? 'modo-oscuro' : ''}`} >
      <button  className= 'btn-app' onClick={toggleModoOscuro}>
          {modoOscuro ? (
            <>
              <i className="fas fa-sun" style={{ marginRight: '5px' }}></i>
              
            </>
          ) : (
            <>
              <i className="fas fa-moon" style={{ marginRight: '5px' }}></i>
             
            </>
          )}
        </button>

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
