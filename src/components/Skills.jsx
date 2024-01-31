import React, {useEffect, useState} from 'react';
import Contact from './Contact';
import PopOne from './PopOne';
import Nav from './Nav';
import PopTwo from './PopTwo'
import '../styles/skills.css'
import Footer from './Footer'

const Skills = () => {
    const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés
    const [popuponeVisible, setPopuponeVisible] = useState(false);
    const [popuptwoVisible, setPopuptwoVisible] = useState(false);

    const togglePopupone = () => {
        setPopuponeVisible(!popuponeVisible);
      };

      const togglePopuptwo = () => {
        setPopuptwoVisible(!popuptwoVisible);
      };
      

    
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
            <div>
                <h2 style={{fontFamily:"'Cedarville Cursive', cursive", textAlign:'center', marginTop:'1rem'}}>{language === 'es' ? 'Sobre mí' : 'About me'}</h2>
                <h3 style={{fontFamily:"'Coming Soon', cursive", textAlign:'center', marginTop:'0'}}>Hola, que gusto que nos conozcamos</h3>
                <p style={{fontFamily:"'Coming Soon', cursive", textAlign:'center', marginTop:'0'}}>Si estás viendo mi portafolio es porque seguro me necesitas y yo a ustedes. <br />Soy Desarrolladora Full Stack y tengo muchas horas de estudio invertidas en el mundo de la programación y años de experiencia en diversos ambientes laborales. Mi capacidad de adaptación es infinita, lo que me permitió  ganar experiencia en rubros tan diversos como enriquecedores:  atención al cliente, redacción, banca financiera, eventos, ventas, hasta finalmente dar con mi nueva pasión: La programación. <br /> ¿Qué es lo qué más me motiva en este nuevo desafio?: la inagotable fuente de conocimiento que me provee, no existe límite para el aprendizaje, siempre hay aguas nuevas para navegar... la curiosidad de la mente y la motivación de aprender nos mantienen activos y despiertos. ¿Qué tengo para ofrecerles? lo más importante : mi valioso tiempo y mis ganas de aplicar mis conocimientos o capacitarme en lo que sea necesario, para que los objetivos fijados sean cumplidos. ¡Ahora solo queda que me des la oportunidad de contarte todo en vivo!, así que te espero tu contacto para concretar esa entrevista. </p>
            </div>
            <div className="skills">
            
            <div className="buttons">
                <button onClick={togglePopupone}>Habilidades Técnicas <i class="fa-solid fa-plus"></i></button>
                <button onClick={togglePopuptwo}>Habilidades Blandas <i class="fa-solid fa-plus"></i></button>
            </div>
            <Nav/>
          
            </div>
            
            {/* Renderizar el componente emergente si es visible */}
            {popuponeVisible && <PopOne onClose={togglePopupone} />}
            {popuptwoVisible && <PopTwo onClose={togglePopuptwo} />}
            <Footer/>
        </>
    );
};

export default Skills;