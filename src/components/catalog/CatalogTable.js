import React, { Component } from "react"
import './table.css'
import firebase from 'firebase'
import ReactTable from "react-table"
import "react-table/react-table.css"
import Album from '../../assets/jacquette.jpg'
import ReactAudioPlayer from 'react-audio-player';
import Audio from './data/Accross.mp3'

const style = {
    subComponent: {
        border: 'solid 1px #6c757d',
        padding: '10px 10px',
        fontWeight: '200',
        color: '#FFF'
    },
    table: {
        color: '#FFF',
    }
}

class CatalogTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        const rootRef = firebase.database().ref();
        this.soundsRef = rootRef.child('sounds');
    }


    componentWillMount() {
        this.soundsRef.on('value', snapshot => {
            let sounds;

            sounds = snapshot.val() ? Object.keys(snapshot.val()).map(key => {
                return snapshot.val()[key];
            }) :
                sounds = [];
            this.setState({ data: sounds })

        })
    }



    render() {

        const data = this.state.data

        const onRowClick = (state, rowInfo, column, instance) => {
            return {
                onClick: (e, handleOriginal) => {
                    console.log(`Row index: ${rowInfo.index}, column header: ${column.Header}`);
                    if (handleOriginal) {
                        handleOriginal();
                    }
                }
            };
        };

        const getTags = (tags, i) => {
            return (

                tags.map((tag, i) => {
                    return (
                        <span class="badge badge-warning ml-2" key={i}>{tag.value}</span>
                    )
                })

            )

        }

        const SubComponent = (props) => {
            return (
                <div className="row" style={style.subComponent}>
                    <div className="col-2">
                        <img src={Album} alt="album" width="200px" />
                    </div>
                    <div className="col-6">
                        Title : {data[props.id].title} <br />
                        Genres :{getTags(data[props.id].genres)} <br />
                        Moods :{getTags(data[props.id].moods)} <br />
                        Instruments :{getTags(data[props.id].instruments)}<br />
                        Loops :{data[props.id].loops} <br />
                    </div>
                    <div className="col-2">
                        <ReactAudioPlayer
                            src={Audio}
                            autoPlay
                        />
                    </div>
                    <div className="col-2">
                        tune actions
                    </div>
                </div>
            )
        }

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
                                                ? <span>&#x229D;</span>
                                                : <span>&#x2295;</span>}
                                        </div>,
                                    style: {
                                        cursor: "pointer",
                                        fontSize: 25,
                                        padding: "0",
                                        textAlign: "center",
                                        userSelect: "none",
                                        width: 50
                                    },
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    accessor: "play"
                                },
                                {
                                    Header: "Title",
                                    accessor: "title",

                                },
                                {
                                    Header: "Lenght",
                                    accessor: "lenght",

                                },
                                {
                                    Header: "BPM",
                                    accessor: "bpm",

                                },
                                {
                                    Header: "Loops",
                                    accessor: "loops",
                                    style: {
                                        cursor: "pointer",
                                        textAlign: "left",

                                    },
                                },
                                {

                                    accessor: "player",

                                },
                                {

                                    accessor: "buy",
                                }
                            ]
                        },
                    ]}
                    defaultPageSize={10}
                    style={style.table}
                    className="-striped -highlight"
                    SubComponent={(row) => <div style={{ padding: '10px' }}><SubComponent id={row.index} /></div>}
                    getTdProps={onRowClick}

                />
                <br />
            </div>
        );
    }
}



export default CatalogTable





