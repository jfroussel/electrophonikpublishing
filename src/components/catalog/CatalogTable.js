import React, { Component } from "react"
import './table.css'
import style from './CatalogTableStyle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSounds } from '../../actions/sounds'
import { getStorageTrack } from '../../actions/storageTrack'
import { filterGenres } from '../../actions/filters'
//import DefaultSound from './data/audioDefault.mpeg'
import ReactTable from "react-table"
import "react-table/react-table.css"
import Album from '../../assets/jacquette.jpg'
import WaveSurfer from './WaveSurfer'
import ReactTooltip from 'react-tooltip'

class CatalogTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureFixture: '',
           
        };
    }

    componentWillMount() {
        this.props.getSounds()
    }

    componentWillReceiveProps(nextProps) {
        console.log('CWM : ', this.props.sounds)
        
    }


    render() {

        const { sounds, storageTrack, filters } = this.props

        const onRowClick = (state, rowInfo, column, instance) => {
            return {
                onClick: (e, handleOriginal) => {

                    let filename = ''
                    const id = rowInfo.index
                    const author = state.data[id].author
                    filename = state.data[id].filename
                    filename && this.props.getStorageTrack(author, filename)

                    if (handleOriginal) {
                        handleOriginal()
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
            const defaultTrack = '../data/audioDefault.mpeg'

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
                        <div className='parent-component' style={style.wave}><WaveSurfer src={!storageTrack ? defaultTrack : storageTrack} /></div>
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
                                        Header: "Tone",
                                        accessor: "tone.label",
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
                        collapseOnDataChange={false}
                        collapseOnSortingChange={true}

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
        storageTrack: state.storageTrack,
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getSounds, getStorageTrack }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CatalogTable);






