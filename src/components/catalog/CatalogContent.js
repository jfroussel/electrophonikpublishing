import React, { Component } from 'react';
import AudioPlayer from './Audioplayer'
import CatalogTable from './CatalogTable'


export default class CatalogContent extends Component {
  render() {
    return (
      <div>
        <h3>Most Popular Royalty Free Music</h3>
        <h5>200 tracks</h5>
        <CatalogTable />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Length</th>
              <th scope="col">Shorts(sec)</th>
              <th scope="col">Loops</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th><AudioPlayer /></th>
              <td>My song number</td>
              <td>2:00</td>
              <td>150</td>
              <td></td>
              <td></td>
              <td><button type="button" className="btn btn-warning">Buy 25€</button></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    )
  }
};
