import React, {Component} from 'react';

class CoverFindDev extends Component {

    constructor(props) {
        super(props);
        this.state = {
           createAccount:'create a account now'
        }
    }

    render() {

        return (
            <div className="cover-container pb-5">
                <div className="cover-inner container">
                    <p className="lead ">
                    You find a reactJS developer !<br /> Create Account</p>
                    <div className="divider"></div>
                    <h1 className="jumbotron-heading">Say 
                        <em> welcome </em>
                    </h1>
                    <div className="row">
                        <div className="m-auto col-md-6 mt-5">
                            <button type="submit" className="btn btn-lg btn-info pill-btn mt-5 font-weight-normal">{this.state.createAccount}</button>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default CoverFindDev;
