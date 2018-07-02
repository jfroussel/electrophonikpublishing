import React, { Component } from "react";
import { makeData } from "./Utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const style = {
    subComponent: {
        border: 'solid 1px #6c757d',
        padding: '10px 10px',
        fontWeight: '200',
    }
}

const SubComponent = () => {
    return (
        <div style={style.subComponent}>
            Title : titre du morceau <br />
            Tags : jazz, blues, rock <br />
            loops details : details des boucles disponiblent <br />
        </div>

    )
}
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

                            columns: [
                                {
                                    expander: true,

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

                                    accessor: "tools",

                                },
                                {

                                    accessor: "buy",
                                }
                            ]
                        },


                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={() => <div style={{ padding: '10px' }}><SubComponent /></div>}
                />
                <br />

            </div>
        );
    }
}

export default CatalogTable


