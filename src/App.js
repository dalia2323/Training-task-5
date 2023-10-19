import React from 'react';
import NavBar from './component/navbar';
import './App.css';
import Countries from './component/countries';
import Favrioute from './component/favrioute';
import SearchBar from './component/search';
import RegionSelector from './component/region-selector';

function App() {
const[darkMode, setDarkMode]= React.useState(false);
function toggleDarkMode(){
  setDarkMode((prevMode)=> !prevMode)
}
  return (
    <>

    <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <main class="container-fluid me-lg-5 mt-4" >
    <section className="ms-lg-5">
      <div className="d-flex justify-content-between filter-section ">
      <SearchBar darkMode={darkMode} />
 <RegionSelector darkMode={darkMode}/>
      </div>
      </section>
    <section className="ms-lg-5 me-lg-5  d-flex justify-content-between mt-5 card-favorite-section">
    <Favrioute />
    <Countries />
    </section>
    </main>
    </>

    
    
  );
}

export default App;
