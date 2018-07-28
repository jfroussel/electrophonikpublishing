import React, { Component } from "react"
import firebase from 'firebase'
import './table.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSounds } from '../../actions/sounds'
import { getFruits } from '../../actions/fruits'
import { getStorageTrack } from '../../actions/storageTrack'
import ReactTable from "react-table"
import "react-table/react-table.css"
import Album from '../../assets/jacquette.jpg'
import WaveSurfer from './WaveSurfer'
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

        color: '#17a2b8',
        cursor: 'pointer',
        textAlign: 'center',
        marginTop: -4,
        lineHeight: 1

    },
    icon: {
        fontSize: 50
    },
    tags: {
        border: 'solid 2px rgba(223, 225, 229, 0.3)',
        borderRadius: 25,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.76)',
        fontWeight: 400,
        fontSize: 12,

    },
    iconAction: {
        color: '#17a2b8',
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
    },
    wave: {
        border: 'solid 1px rgba(223, 225, 229, 0.3)',
        borderRadius: 10
    }
}

class CatalogTable extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    componentWillMount() {
        this.props.getFruits()
        this.props.getSounds()
        this.props.getStorageTrack(this.props.author, this.props.filename)
    }


    render() {
        const { sounds, fruits, storageTrack } = this.props
        console.log('recuperation des sons : ', this.props)
        const onRowClick = (state, rowInfo, column, instance) => {
            return {
                onClick: (e, handleOriginal) => {
                    console.log(`Row index: ${rowInfo.index}, info: ${state}`)
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
                            <span className="ml-2 pl-2 pt-1 pb-1 pr-2" key={i} style={style.tags}>{tag.value}</span>
                        )
                    })
                )
            }
        }

        const Buy = () => {
            return (
                <button type="button" className="btn btn-outline-warning">Buy 25€</button>
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
            const author = sounds[props.id].author
            const filename = sounds[props.id].filename
            
            return (
                <div className="row" style={style.subComponent}>
                    <div className="col-2 pt-3">
                        <img src={Album} alt="album" width="200px" />
                    </div>
                    <div className="col-10 pt-3" >
                        <div className="pb-3">Audio filename : {filename ? filename : 'track not found !'} <br /><span>By Author : {author ? author : 'author not found !'}</span> </div>
                        <div className="pb-3">Genres : {getTags(sounds[props.id].genres)} </div>
                        <div className="pb-3">Moods : {getTags(sounds[props.id].moods)}</div>
                        <div className="pb-3">Instruments : {getTags(sounds[props.id].instruments) ? getTags(sounds[props.id].instruments) : ''}</div>
                        <div className='parent-component' style={style.wave}><WaveSurfer src={storageTrack} /></div>
                    </div>
                </div>
            )
        }
        
        if (sounds) {
            return (
                <div>
                    <ReactTable
                        data={sounds}
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
                                                    : <div data-tip="Expend for more infos" style={style.play}><i className="material-icons" style={style.icon}>arrow_right</i></div>}
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
}

const mapStateToProps = (state) => {
    return {
        sounds: state.sounds,
        fruits: state.fruits,
        storageTrack: state.storageTrack
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getSounds, getFruits, getStorageTrack }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CatalogTable);






