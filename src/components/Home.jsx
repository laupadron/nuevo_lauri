import React,{useState,useRef,useEffect} from 'react';
import Nav from './Nav';
import pom1 from '../assets/pom1.png';
import pom2 from '../assets/pom2.png';
import '../styles/home.css';
import Footer from './Footer';
import Contact from './Contact';

const Home = () => {
    const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés
    
   // Función para cambiar el idioma
   const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

 

  // Simular un cambio de idioma después de 5 segundos
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
    <>
    <Contact/>
    <div className="home-container"  >

        <div className='img'>
            <img src={pom1} alt="" className='img1'/>
        </div>
        <div className="text">
            <div className="container-text">
                <h2 style={{fontFamily:"'Coming Soon', cursive"}}>{language === 'es' ? '¡Hola!, soy' : 'Hi!, I´m'}</h2>
                <h1>LAURA PADRÓN</h1>
                <h2>{language === 'es' ? 'Desarrolladora Web' : 'Web Developer'} <br />{language === 'es' ? 'Analista de datos' : 'Data Analyst'}</h2>
            </div>
        </div>
        <div className='img'>
            <img src={pom2} alt="" className='img2' />
        </div>
          
    </div>
     
     <div className="nav-container">
     <Nav /> 
     </div>
     <Footer/>
           
            
         
    </> 
    );
};

export default Home;