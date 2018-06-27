import React, { Component } from 'react';

const genres = ['Jazz',
  'Funk',
  'Blues',
  'Pop',
  'Rock',
  'Hard rock',
  'Classique',
  'Country',
  'Reggae',
  'Ambient',
  'Ballade',
  'Cinematic',
  'Drum n bass',
  'Easy listening',
  'Electro',
  'Epic trailer',
  'Folk',
  'Hip-hop',
  'Latin',
  'Metal',
  'Orchestral',
  'World music',]
const moods = [
  'Action / Sports',
  'Adventure / Discovery',
  'Aggressive',
  'Comedy / Funny',
  'Crime / Triller /Spy',
  'Dark / Samber',
  'Epic /orchestral',
  'Fashion / Lifestyle',
  'Feel Good',
  'Gentle / Light',
  'Happy / Cheerful',
]
const artists = ['jeff','olive']
const instruments = [
  'Accordion',
  'Bagpipes',
  'Banjo',
  'Bassoon',
  'Cello',
  'Clarinet',
  'Cymbal',
  'Double bass',
  'Drum',
  'Bass drum',
  'Bongo drum',
  'Snare drum',
  'Timpani',
  'Dulcimer',
  'Flute',
  'French horn',
  'Gong',
  'Guitar',
  'Electric guitar',
  'Harp',
  'Harpsichord',
  'Hurdy gurdy',
  'Jew s harp',
  'Lute',
  'Lyre',
  'Marimba',
  'Oboe',
  'Organ',
  'Pan pipes',
  'Pennywhistle',
  'Piano',
  'Recorder',
  'Saxophone',
  'Sitar',
  'Synthesizer',
  'Tambourine',
  'Triangle',
  'Trombone',
  'Trumpet',
  'Tuba',
  'Viola',
  'Violin',
  'Fiddle',
  'Xylophone',
]

export default class CatalogSidebar extends Component {
  render() {
    return (
      <div>
        <div className="accordion" id="accordionExample">
          <div className="card card-catalog">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Genres
                </button>
              </h5>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                {genres.map((genre) => {
                  return (
                    <div className="form-group form-check" key={genre}>
                      <input type="checkbox" className="form-check-input" id={genre} />
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
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Mood
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                {moods.map((mood) => {
                  return (
                    <div className="form-group form-check" key={mood}>
                      <input type="checkbox" className="form-check-input" id={mood} />
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
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                  Length
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
                <button className="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                className
                </button>
              </h5>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
              <div className="card-body">
              {artists.map((artist) => {
                  return (
                    <div className="form-group form-check" key={artist}>
                      <input type="checkbox" className="form-check-input" id={artist} />
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
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                  Instruments
                </button>
              </h5>
            </div>
            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
              <div className="card-body">
              {instruments.map((instrument) => {
                  return (
                    <div className="form-group form-check" key={instrument}>
                      <input type="checkbox" className="form-check-input" id={instrument} />
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
