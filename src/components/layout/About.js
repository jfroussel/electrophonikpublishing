import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';

const About = () => (
    <ScrollableAnchor id={'about'}>
    <section className="features-1 text-center">
        <div className="container">
            <h2 className="font-weight-light">About</h2>
            <p className="lead constrain-width mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum sapien.</p>
            <div className="divider"></div>
        </div>
    </section>
    </ScrollableAnchor>
)

export default About