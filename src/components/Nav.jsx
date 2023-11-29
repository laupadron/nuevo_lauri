import React,{useState, useEffect} from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';


const Nav = () => {
 
  const [cursorActive, setCursorActive] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const [isMenuOpen, setMenuOpen] = useState(false); 
    

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        
      };

      const closeMenu = () => {
        setMenuOpen(false);
      };

      const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
    
      useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');
    
        const handleMouseEnter = () => {
          setCursorActive(true);
        };
    
        const handleMouseLeave = () => {
          setCursorActive(false);
        };
    
        document.addEventListener('mousemove', handleMouseMove);
        cursor.addEventListener('mouseenter', handleMouseEnter);
        cursor.addEventListener('mouseleave', handleMouseLeave);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          cursor.removeEventListener('mouseenter', handleMouseEnter);
          cursor.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, []);
    
      
    return (
        <nav className={`nav-container  ${isMenuOpen ? 'menu-open' : ''}`} >
         
         
         {/* Cursor personalizado */}
{cursorPosition && (
  <div
    className={`custom-cursor ${cursorPosition ? 'active' : ''}`}
    style={{ left: cursorPosition.x, top: cursorPosition.y }}
  ></div>
)}

       
      <div className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <span className="material-symbols-outlined">
menu
</span>

      </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={closeMenu}>
  X
</button>
          <li className="links ">
            <Link to="/" onClick={closeMenu} className="home-link" >Home</Link>
          </li>
          
          <li>
            <Link to="/projects" onClick={closeMenu} >Proyectos</Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeMenu}>Skills</Link>
          </li>
         
          
          
          
         
        </ul>
       
        
      </nav>
    );
};

export default Nav;