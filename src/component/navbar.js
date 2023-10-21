import React from 'react';

function NavBar(props) {
  return (
    <div className={props.darkMode ? 'dark-mode' : ''}>
      <nav className="navbar navbar-expand-lg shadow-sm w-auto">
        <div className="container-fluid ms-lg-5 mt-1 mb-1">
          <a className="navbar-brand navbar-title" href="index.html"><b>Where in the world?</b></a>
          <button className="btn btn-sm mode-toggle me-lg-5" id="darkModeToggle" onClick={props.toggleDarkMode}>
            <i className="fa-regular fa-moon " id="darkModeIcon"></i> Dark Mode
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
