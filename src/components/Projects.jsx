import React, {useState} from 'react';
import '../styles/projects.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projects from '../projects.json';
import Contact from './Contact';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import NextArrow from './Arrows.jsx';
import PrevArrow from './Arrows2.jsx';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        
      };

    return (
    <>
    <Contact/>
        <div className='container-slider'>
            <h2>Proyectos</h2>
            {projects.projectos.length > 0 && (
  <Slider {...settings}>
    {projects.projectos.map((proyecto, index) => (
       <div
       key={index}
       className={`slider ${hoveredIndex === index ? 'hovered' : ''}`}
       onMouseEnter={() => setHoveredIndex(index)}
       onMouseLeave={() => setHoveredIndex(null)}
     >
        <h3>{proyecto.title}</h3>

        {/* Mostrar múltiples enlaces si existen */}
        {Array.isArray(proyecto.link) ? (
          <div className='link'>
            {proyecto.link.map((link, linkIndex) => (
              <React.Fragment key={linkIndex}>
                <Link to={link} style={{ color: '#ff0000' }}>
                  {link}
                </Link>
                {linkIndex < proyecto.link.length - 1 && ' / '}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <h3 className='link'>
            <Link to={proyecto.link} style={{ color: '#ff0000' }}>
              {proyecto.link}
            </Link>
          </h3>
        )}

        <div className="image-container">
          <img src={proyecto.image} alt={proyecto.title} style={{ width: '500px' }} />
          {hoveredIndex === index && (
            <div className="description-overlay">
              <p>{proyecto.description}</p>
            </div>
          )}
        </div>
      </div>
    ))}
  </Slider>
            )}
        </div>
        <div className="nav-container">
     <Nav /> 
     </div>
     <Footer/>
    </>
    );
};

export default Projects;
