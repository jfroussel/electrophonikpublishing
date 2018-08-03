import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  filterGenres,
  filterArtists, 
  filterInstruments,  
  filterMoods, 
  filterBpm, 
  filterLength,
 } from '../../actions/filters';
import style from './CatalogSidebarStyle'
import { genres, moods, artists, instruments } from './CatalogConstants'


class CatalogSidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mouseOverSidebar: false,
      checked: false
    }
  }

  onMouseOver() {
    //this.setState({ mouseOverSidebar: true })
    return (
      console.log('on mouse over')
    )
  }


  render() {
  const { filters } = this.props
  console.log('SIDEBAR : ',filters)
    return (
      <div style={style.containerSidebar}>
        <div className="accordion" id="catalog-sidebar">
          <div className="card card-catalog">
            <div className="card-header" id="headingOne">

              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  onMouseOver={this.onMouseOver}
                >

                  GENRES <span class="badge badge-warning ml-3">{filters.genres.length}</span>

                </button>
              </h5>

            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                {genres.map((genre) => {
                  return (
                    <div className="form-check" key={genre}>
                      <input
                        type="checkbox"

                        value={genre}
                        className="form-check-input"
                        id={genre}
                        onChange={(e) => {
                          console.log(e.target.value)
                          if(e.target.checked) {
                            this.props.dispatch(filterGenres(e.target.value));
                          } 
                        }}

                      />
                      <label className="form-check-label" htmlFor="exampleCheck1">{genre}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="card card-catalog">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  MOODS <span class="badge badge-warning ml-3">{filters.moods.length}</span>
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                {moods.map((mood) => {
                  return (
                    <div className="form-check" key={mood}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={this.state.checked}
                        value={mood}
                        id={mood}
                        onClick={(e) => {
                          console.log(e.target.value)
                          this.props.dispatch(filterMoods(e.target.value));
                        }}
                      />
                      <label className="form-check-label" htmlFor="exampleCheck1">{mood}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="card card-catalog">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  BPM
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
              </div>
            </div>
          </div>

          <div className="card card-catalog">
            <div className="card-header" id="headingFour">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  LENGTH
                </button>
              </h5>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div className="card-body">
              </div>
            </div>
          </div>

          <div className="card card-catalog">
            <div className="card-header" id="headingFive">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed "
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ARTISTS <span class="badge badge-warning ml-3">{filters.artists.length}</span>
                </button>
              </h5>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
              <div className="card-body">
                {artists.map((artist) => {
                  return (
                    <div className="form-check" key={artist}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={artist}
                        value={artist}
                        onClick={(e) => {
                          console.log(e.target.value)
                          this.props.dispatch(filterArtists(e.target.value));
                        }}
                      />
                      <label className="form-check-label" htmlFor="exampleCheck1">{artist}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="card card-catalog">
            <div className="card-header" id="headingSix">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  INSTRUMENTS <span class="badge badge-warning ml-3">{filters.instruments.length}</span>
                </button>
              </h5>
            </div>
            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
              <div className="card-body">
                {instruments.map((instrument) => {
                  return (
                    <div className="form-check has-warning" key={instrument}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={instrument}
                        value={instrument}
                        onClick={(e) => {
                          console.log(e.target.value)
                          this.props.dispatch(filterInstruments(e.target.value));
                        }}
                      />
                      <label className="form-check-label" htmlFor="exampleCheck1">{instrument}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}


export default connect(mapStateToProps)(CatalogSidebar)