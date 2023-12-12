import React from "react";
import '../styles/arrow.css'
const NextArrow = ({ onClick }) => (
    <div className="slick-arrow slick-next" onClick={onClick}>
      &#9654; {/* Código Unicode para un triángulo apuntando hacia la derecha */}
    </div>
  );

  

  export default NextArrow;
