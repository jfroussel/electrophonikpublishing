import React, {  } from 'react';
import ScrollableAnchor, {   } from 'react-scrollable-anchor'
import tmp1 from '../../assets/tmp1.jpeg'
import tmp2 from '../../assets/tmp2.jpeg'
import tmp3 from '../../assets/tmp3.jpeg'



const Works = () => {
    return (
        <ScrollableAnchor id={'works'}>
            <section className="features-1 text-center">
                <div className="container">
                    <h2 className="font-weight-light">Works gallery</h2>
                    <p className="lead constrain-width mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum sapien.</p>
                    <div className="divider"></div>
                    
                    <div className="row">
                        <div className="col-md-4 col-feature">
                            <img className="works-template" src={tmp1} alt="Card  cap" />
                            <p><a className="btn btn-outline-info mt-2 font-weight-normal" href="" role="button">View details</a></p>
                        </div>
                        <div className="col-md-4 col-feature">
                            <img className="works-template" src={tmp2} alt="Card  cap" />
                            <p><a className="btn btn-outline-info mt-2 font-weight-normal" href="" role="button">View details</a></p>
                        </div>
                        <div className="col-md-4 col-feature">
                            <img className="works-template" src={tmp3} alt="Card  cap" />
                            <p><a className="btn btn-outline-info mt-2 font-weight-normal" href="" role="button">View details</a></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-feature">
                            <img className="works-template" src={tmp1} alt="Card  cap" />
                            <p><a className="btn btn-outline-info mt-2 font-weight-normal" href="" role="button">View details</a></p>
                        </div>
                        
                        <div className="col-md-4 col-feature">
                            <img className="works-template" src={tmp3} alt="Card  cap" />
                            <p><a className="btn btn-outline-info mt-2 font-weight-normal" href="" role="button">View details</a></p>
                        </div>
                        <div className="col-md-4 col-feature">
                            <img className="works-template" src={tmp2} alt="Card  cap" />
                            <p><a className="btn btn-outline-info mt-2 font-weight-normal" href="" role="button">View details</a></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-feature">
                            <img className="works-template" src={tmp3} alt="Card  cap" />
                            <p><a className="btn btn-outline-info mt-2 font-weight-normal" href="" role="button">View details</a></p>
                        </div>
                        <div className="col-md-4 col-feature">
                            <img className="works-template" src={tmp1} alt="Card  cap" />
                            <p><a className="btn btn-outline-info mt-2 font-weight-normal" href="" role="button">View details</a></p>
                        </div>
                        <div className="col-md-4 col-feature">
                            <img className="works-template" src={tmp2} alt="Card  cap" />
                            <p><a className="btn btn-outline-info mt-2 font-weight-normal" href="" role="button">View details</a></p>
                        </div>
                       
                    </div>
                    
                </div>
            </section>
        </ScrollableAnchor>
    )
}
   
export default Works;