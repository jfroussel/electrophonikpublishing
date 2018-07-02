import React, { Component } from 'react';
import ReadDir from 'recursive-readdir'

export default class DataMusic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }

    componentWillMount = () => {
        ReadDir("data", ["*.pdf"], function (err, files) {
            console.log(files)
            this.state({ data: files })
        });
    };

    render() {
        return (
            <div>
                {console.log(this.state.data)}
            </div>
        )
    }
};
