import React, { Component } from 'react';
import CatalogTable from './CatalogTable'

export default class CatalogContent extends Component {
  render() {
    return (
      <div>
        <h3>Most Popular Royalty Free Music</h3>
        <h5>200 tracks</h5>
        <CatalogTable />
      </div>
    )
  }
};
