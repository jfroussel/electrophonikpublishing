import React, { Component } from 'react';
import AudioPlayer from './Audioplayer'
import CatalogTable from './CatalogTable'

export default class CatalogContent extends Component {
  render() {
    return (
      <div>
        <h3>Most Popular Royalty Free Music</h3>
        <h5>200 tracks</h5>
       
         
        <button type="button" className="btn btn-warning">Buy 25€</button>
        <CatalogTable />
      </div>
    )
  }
};
