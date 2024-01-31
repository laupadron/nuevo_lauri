import React from 'react';

import '../styles/contact.css'
const Contact = () => {
    return (
        <div className='container-contact'>
            <div className="icons">
            
                <a href="https://api.whatsapp.com/send?phone=543454181695">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="https://github.com/laupadron">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/laura-padron-662223254/">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
                <div className="contact">
                <i class="fa-solid fa-left-long"></i>
                    <h2 >Contacto</h2>
                    <i class="fa-solid fa-right-long"></i>
                </div>
          
            <div className='mail'>
                <i className="fa-regular fa-envelope"></i>
                <h2>laupadron1458@gmail.com</h2>
                <a href="https://drive.google.com/file/d/1lhD4NBfOa4qIm9j1_-IqODoJxyyDCLyg/view?usp=sharing" target="_blank" download="CV LauPadron"><button><i className="fa-solid fa-circle-down"></i>Descarga mi CV</button></a>
            </div>
        </div>
    );
};

export default Contact;