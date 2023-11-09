import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../layout/Navbar/Navbar';
import useDarkMode from '../../useDarkMode';
import './countryDeatail.css';
import FlagImg from '../../component/FlagImg';
import Button from '../../component/Button';
import Deatail from '../../component/Deatail';

export default function CountryDetail() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { code } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((result) => {
        setCountry(result[0]);
      });
  }, [code]);

  return (
    <>
      <header>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <div className="container-fluid overflow-hidden mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 ps-lg-5">
            <Button to="/" label="Back" />
            {Object.keys(country).length > 0 && <FlagImg image={country.flags.png} />}
          </div>
          {Object.keys(country).length > 0 && <Deatail country={country} />}
        </div>
      </div>
    </>
  );
}
