import React, { Component } from 'react';

const style = {
  navbar: {
    //backgroundColor: '#001a1a',
  }
}
export default class CatalogHeader extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark" style={style.navbar}>
       
       
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            
          </ul>
        </div>
      </nav>
      
    )
  }
};
