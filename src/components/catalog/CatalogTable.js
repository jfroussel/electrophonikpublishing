import React, { Component } from "react"
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
        color: '#fff'
    },
    table: {
        color:'#FFF',
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
            this.setState({data:sounds})
            
        })
    }
   


    render() {
       
        const data = this.state.data
        console.log(data)

        const SubComponent = () => {
            return (
                <div className="row" style={style.subComponent}>
                {console.log('subComponent : ',data)}
                    <div className="col-2">
                        <img src={Album} alt="album" width="200px" />
                    </div>
                    <div className="col-4">
                        Title : {data[0].title} <br />
                        Tags : jazz, blues, rock <br />
                        loops details : details des boucles disponiblent <br />
                    </div>
                    <div className="col-4">
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
                                        userSelect: "none"
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
                    SubComponent={() => <div style={{ padding: '10px' }}><SubComponent title={data.title}  /></div>}
                />
                <br />
            </div>
        );
    }
}



export default CatalogTable





