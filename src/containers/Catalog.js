import React, { Component } from 'react';
import ScrollableAnchor, { } from 'react-scrollable-anchor'
import axios from 'axios'



class Catalog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFixtures: []
    }
  }


  componentWillMount() {
    console.log('component will mount : ok')
   

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
              <div>
                {console.log(this.state.dataFixtures)}
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default Catalog;

