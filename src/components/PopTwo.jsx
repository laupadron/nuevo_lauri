import React, {useEffect, useState} from 'react';
import '../styles/pop.css'

const PopTwo = ({ onClose }) => {
  const [language, setLanguage] = useState('es');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (language === 'es') {
        changeLanguage('en');
      } else {
        changeLanguage('es');
      }
    }, 3000); // Cambiará el idioma después de 5 segundos
    return () => clearTimeout(timer);
  }, [language]);

    return (
        <div className="popup-container">
          <div className="popup">
            <h3>{language === 'es' ? 'Soft Skills' : 'Habilidades Blandas'}</h3>
            
            <div className="icons pop-icons" style={{marginTop:'0'}}>
              <div className="soft">
                <i className="dancing fa-solid fa-cube efects"></i>
                <h4>Flexibilidad y adaptación a cambios </h4>
                <i className="dancing fa-solid fa-hands-asl-interpreting efects"></i> 
                <h4>Trabajo en equipo, gestión de tiempo y buena comunicación </h4>
                <i className="dancing fa-solid fa-lightbulb"></i>
                <h4>Soy una buscadora innata de soluciones</h4>
              </div>
            </div>
            <button onClick={onClose} className='icons' style={{backgroundColor:'white', border:'none'}}><i className="fa-solid fa-circle-xmark"></i></button>
          </div>
      </div>
    );
  };

  export default PopTwo;
  