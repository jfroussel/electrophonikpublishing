import React, { Component } from 'react';

export default class CatalogHeader extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       
       
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">GENRE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">MOOD</a>
            </li>
          </ul>
        </div>
      </nav>
      
    )
  }
};
