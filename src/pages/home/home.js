import React, { useEffect, useState,Component} from 'react';
import {Link} from 'react-router-dom'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NavBar from '../../layout/Navbar/Navbar';
import './home.css';
import Countries from '../../component/countries';
import Favrioute from '../../component/favrioute';
import SearchBar from '../../component/search';
import RegionSelector from '../../component/select';
import useDarkMode from '../../useDarkMode';
import CountriesContainer from '../../component/CountriesContainer ';
export default function Home(){
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <DndProvider backend={HTML5Backend}>
          <header>
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </header>
          <main className={`container-fluid me-lg-5 pt-4 ${darkMode ? 'dark-mode' : ''}`}>
            <CountriesContainer />
          </main>
        </DndProvider>
      );
}
