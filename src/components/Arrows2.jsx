import React from "react";
import '../styles/arrow.css'


const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
     &#9664; 
  </div>
);

export default PrevArrow;