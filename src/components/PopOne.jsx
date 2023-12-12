import React, {useEffect, useState}from 'react';
import '../styles/pop.css'


const PopOne = ({ onClose }) => {
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
            <h3>{language === 'es' ? 'Full Stack Development' : 'Desarrolladora Full Stack'}<i class="fa-solid fa-code" style={{marginLeft:'1rem'}}></i></h3>
            <div className=" icons pop-icons">
              <i className=" dancing fa-brands fa-html5 efects"></i>
              <i className="dancing fa-brands fa-css3-alt efects"></i>
              <i className="dancing fa-brands fa-js efects"></i>
              <i className="dancing fa-brands fa-react efects"></i>
              <i className="dancing fa-brands fa-github efects"></i>
              <i className="dancing fa-brands fa-node"></i>
              <i className="dancing fa-brands fa-python"></i>
              <i className="dancing fa-solid fa-database"></i>
            </div>
            <h3 style={{marginTop:'20px', marginBottom:'0px'}}>{language === 'es' ? 'Data Analist' : 'Analista de Datos'} <i class="fa-solid fa-magnifying-glass-chart" style={{marginLeft:'1rem'}}></i></h3>
            <div className="icons pop-icons" style={{marginTop:'0'}}>
              <h4>Python </h4>
              <i className="dancing fa-solid fa-chart-simple"></i> 
              <h4>Excel </h4>
              <i className="dancing fa-solid fa-chart-line"></i>
              <h4>Loocker Studio </h4>
            </div>
            <h3>{language === 'es' ? 'Certifications' : 'Certificaciones'}<i class="fa-solid fa-certificate" style={{marginLeft:'1rem'}}></i> </h3>
            <div className="icons pop-icons" style={{marginTop:'0'}}>
              <a href="https://drive.google.com/file/d/1Xlr_DkYGhzKh_JO5AxsRPK6TQjrVjBJC/view" target="_blank" rel="noopener noreferrer">Fundamentos </a>
              <a href="https://certificates.academlo.com/en/verify/50061396366960" target="_blank" rel="noopener noreferrer">FullStack </a>
              <a href="https://drive.google.com/file/d/1BhWXxl7s_Xc9F89Fq400s0ZyLYLT3QJG/view" target="_blank" rel="noopener noreferrer">Python </a>
              <a href="https://drive.google.com/file/d/1bOHwLMiNRGYv-oSLcb9JYXr3Xq9mhUES/view" target="_blank" rel="noopener noreferrer">Idioma </a>
            </div>
            <button onClick={onClose} className='icons' style={{backgroundColor:'white', border:'none'}}><i className="fa-solid fa-circle-xmark"></i></button>
          </div>
      </div>
    );
  };
  
  export default PopOne;