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
        <section className="features-1">
          <div className="container-fluid container-catalog">
            
           
              <CatalogHeader />
           
            <div className="row">
              <div className="col-2 catalog-sidebar">
                <CatalogSidebar />
              </div>
              <div className="col-10">
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

