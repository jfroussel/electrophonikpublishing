import React, { Component } from 'react';
import ScrollableAnchor, { } from 'react-scrollable-anchor'
import CatalogHeader from '../components/catalog/CatalogHeader'
import CatalogSidebar from '../components/catalog/CatalogSidebar'
import CatalogContent from '../components/catalog/CatalogContent'




class Catalog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFixtures: []
    }
  }


  render() {

    return (
      <ScrollableAnchor id={'catalog'}>
        <section className="features-1 text-center">
          <div className="container">
            <h2 className="font-weight-light">Catalog</h2>
            <p className="lead constrain-width mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum sapien.</p>
            <div className="divider"></div>
            <div className="row">
              <CatalogHeader />
            </div>
            <div className="row">
              <div className="col-3">
                <CatalogSidebar />
              </div>
              <div className="col-9">
                <CatalogContent />
              </div>
            </div>

          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default Catalog;

