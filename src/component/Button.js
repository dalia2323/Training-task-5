import React from 'react';
import { Link } from 'react-router-dom';
function Button({ to, label}) {
  return (
    <Link to={to} 
    className="btn mt-lg-2 rounded-2 btn-sm w-width d-block shadow-sm back-button">
      <i className="fa-solid fa-arrow-left pe-2"></i>
      {label}
    </Link>
  );
}
export default Button;
