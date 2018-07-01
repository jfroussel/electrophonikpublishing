import React, { Component } from "react";
import { makeData } from "./Utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class CatalogTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: makeData()
        };
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "Expand",
                            columns: [
                                {
                                    expander: true,
                                    Header: () => <strong>More</strong>,
                                    width: 65,
                                    Expander: ({ isExpanded, ...rest }) =>
                                        <div>
                                            {isExpanded
                                                ? <span>&#x2299;</span>
                                                : <span>&#x2295;</span>}
                                        </div>,
                                    style: {
                                        cursor: "pointer",
                                        fontSize: 25,
                                        padding: "0",
                                        textAlign: "center",
                                        userSelect: "none"
                                    },
                                    Footer: () => <span>&hearts;</span>
                                }
                            ]
                        },
                        {
                            Header: "Name",
                            columns: [
                                
                                {
                                    Header: "Title",
                                    accessor: "firstName",

                                },
                                {
                                    Header: "Length",
                                    accessor: "length",

                                },
                                {
                                    Header: "BPM",
                                    accessor: "bpm",

                                },
                                {
                                    Header: "Loops",
                                    accessor: "loops",

                                },
                                {
                                    Header: "Tools",
                                    accessor: "tools",

                                },
                                {
                                    Header: "Buy in",
                                    accessor: "buy",
                                }
                            ]
                        },
                        
                        
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={() => <div style={{ padding: '10px' }}>Hello</div>}
                />
                <br />

            </div>
        );
    }
}

export default CatalogTable


