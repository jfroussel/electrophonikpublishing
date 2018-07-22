import React, { Component } from "react"
import './table.css'
import firebase from 'firebase'
import ReactTable from "react-table"
import "react-table/react-table.css"
import Album from '../../assets/jacquette.jpg'
import AudioPlayer from './AudioPlayer'
import WaveSurfer from './WaveSurfer'
import Audio from './data/Accross.mp3'
import ReactTooltip from 'react-tooltip'




const style = {
    subComponent: {
        border: 'solid 1px #6c757d',
        padding: '10px 10px',
        fontWeight: '200',
        color: '#FFF',

    },
    table: {
        color: '#FFF',
    },
    play: {

        color: 'rgb(220, 173, 84)',
        cursor: 'pointer',
        textAlign: 'center',
        marginTop: -4,
        lineHeight: 1

    },
    icon: {
        fontSize: 50
    },
    tags: {
        border: 'solid 2px rgb(220, 173, 84)',
        borderRadius: 25,
        backgroundColor: 'rgb(220, 173, 84)',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 12,

    },
    iconAction: {
        color: '#dcad54',
        backgroundColor: 'transparent',

    },
    iconBoxAction: {
        border: 'solid 2px #dfe1e5c2',
        textAlign: 'center',
        paddingTop: 5,
        borderRadius: 50,
        width: 40,
        height: 40,
        cursor: 'pointer'
    },
    waveTools: {
        border: 'solid 2px rgb(60, 61, 62)',
        paddingTop: 10,
        marginTop: 10,
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
                    console.log(`Row index: ${rowInfo.index}, info: ${e}`);
                    if (handleOriginal) {
                        handleOriginal();
                    }
                }
            };
        };

        const getTags = (tags, i) => {
            if (tags) {
                return (

                    tags.map((tag, i) => {
                        return (
                            <span className="ml-2 pl-2 pr-2" key={i} style={style.tags}>{tag.value}</span>
                        )
                    })

                )
            }
        }

        const Buy = () => {
            return (
                <button type="button" className="btn btn-warning">Buy 25€</button>
            )
        }

        const CatalogActions = () => {
            return (
                <div>
                    <div className="row">
                        <div style={style.iconBoxAction} className="ml-3" data-tip="like this track" >
                            <i className="far fa-heart" style={style.iconAction} ></i>
                        </div>
                        <div style={style.iconBoxAction} className="ml-2" data-tip="Download this track">
                            <i className="fas fa-download" style={style.iconAction} ></i>
                        </div>
                        <div style={style.iconBoxAction} className="ml-2" data-tip="Add to favorites">
                            <i className="fas fa-music" style={style.iconAction} ></i>
                        </div>
                    </div>
                    <ReactTooltip />
                </div>
            )
        }

        const SubComponent = (props) => {
            return (
                <div className="row" style={style.subComponent}>

                    <div className="col-2 pt-3">
                        <img src={Album} alt="album" width="200px" />
                    </div>
                    <div className="col-10 pt-3" >
                        
                        <div className="pb-2">Genres : {getTags(data[props.id].genres)} </div>
                        <div className="pb-2">Moods : {getTags(data[props.id].moods)}</div>
                        <div className="pb-2">Instruments : {getTags(data[props.id].instruments) ? getTags(data[props.id].instruments) : ''}</div>
                        <div className='parent-component'><WaveSurfer src={Audio} /></div>
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
                                                ? <div data-tip="" style={style.play}><i className="material-icons" style={style.icon}>arrow_drop_down</i></div>
                                                : <div data-tip="Expend for more infos"style={style.play}><i className="material-icons" style={style.icon}>arrow_right</i></div>}
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
                                    Header: "Title",
                                    accessor: "title",


                                },
                                {
                                    Header: "Author",
                                    accessor: "author",

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

                                    accessor: "Actions",
                                    Cell: row => (
                                        <div><CatalogActions /></div>
                                    )
                                },
                                {

                                    accessor: "buy",
                                    Cell: row => (
                                        <div><Buy /></div>
                                    )
                                },

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





