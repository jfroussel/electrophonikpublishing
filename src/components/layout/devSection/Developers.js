import React, { Component } from 'react';
import DevelopersList from '../../../containers/DevelopersList'
import ScrollableAnchor from 'react-scrollable-anchor'

class Developers extends Component {

    render() {
        return (
            <div>
            <ScrollableAnchor id={'developers'}>
                <section className="features-1 text-center">
                    <div className="container">
                        <h2 className="font-weight-light">Dev profils</h2>
                        <p className="lead constrain-width mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum sapien.</p>
                        <div className="divider"></div>
                        <DevelopersList />
                    </div>
                </section>
            </ScrollableAnchor>
            </div>
        )
    }
}
                
export default Developers;