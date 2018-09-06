import React, { } from 'react';
import ScrollableAnchor, { } from 'react-scrollable-anchor'
import ProjectsList from '../project/projectsList'
import AddProject from '../project/addProject'


const Projects = () => {
    return (
        <ScrollableAnchor id={'projects'}>
            <section className="features-1 text-center">
                <div className="container-fluid">
                    <h2 className="font-weight-light">Projects</h2>
                    <p className="lead constrain-width mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum sapien.</p>
                    <div className="divider"></div>
                    <div className="row">
                        <div className="col-8">
                            <ProjectsList />
                        </div>
                        <div className="col-4">
                            <AddProject />
                        </div>
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    )
}

export default Projects;