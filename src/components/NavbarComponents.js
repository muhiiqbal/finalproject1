import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";

const NavbarComponents = ({ value, onChange, onSearch, setSearchTerm }) => {
  return (
    <div>
      {/* navbar */}
      
        <div className="container">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">
                  Indonesia
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Programming" className="nav-link" href="#">
                  Programming
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/Covid" className="nav-link" href="#">
                  COVID-19
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Saved" className="nav-link">
                  Saved
                </Link>
              </li>
            </ul>
            {/* search */}
            
            {/* search bar */}
          </div>
        </div>
      
      {/* navbar */}
    </div>
  );
};

export default NavbarComponents;
