import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
  <>
  
      <div className="end">
        <a href="https://drive.google.com/file/d/1MKSx0pWx5mlbCxAUAaxmQmMpFY8ujbe1/view?usp=drive_link" target="_blank" download="CV LauPadron"><button><i className="fa-solid fa-circle-down"></i>Descarga mi CV</button></a>
        <h2 className='pom'>Arte : Pamela Antón <a href="https://www.instagram.com/yeuxojosenfrances/" target="_blank" rel="noopener noreferrer">
                    @yeuxojosenfrances
                </a></h2>
          
        <h2 className='end'> Portfolio realizado con tecnología React + css </h2>
      
      </div>
     
    </>
    );
};

export default Footer;