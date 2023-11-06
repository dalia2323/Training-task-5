import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../layout/Navbar/Navbar';
import useDarkMode from '../../useDarkMode';

function CountryDetail(){
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
          <header>
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </header>
      );
}
export default CountryDetail;