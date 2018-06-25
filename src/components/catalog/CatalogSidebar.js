import React, { Component } from 'react';

const Genres = ['Jazz',
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
const Moods = [
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
const Artists = []
const Instruments = [
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
        <div class="accordion" id="accordionExample">
          <div class="card card-catalog">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Genres
                </button>
              </h5>
            </div>

            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                {Genres.map((genre) => {
                  return (
                    <div class="form-group form-check" key={genre}>
                      <input type="checkbox" class="form-check-input" id={genre} />
                      <label class="form-check-label" for="exampleCheck1">{genre}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div class="card card-catalog">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Mood
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                {Moods.map((mood) => {
                  return (
                    <div class="form-group form-check" key={mood}>
                      <input type="checkbox" class="form-check-input" id={mood} />
                      <label class="form-check-label" for="exampleCheck1">{mood}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div class="card card-catalog">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  BPM
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
              </div>
            </div>
          </div>

          <div class="card card-catalog">
            <div class="card-header" id="headingFour">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                  Length
                </button>
              </h5>
            </div>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div class="card-body">
              </div>
            </div>
          </div>

          <div class="card card-catalog">
            <div class="card-header" id="headingFive">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                  Artists
                </button>
              </h5>
            </div>
            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
              <div class="card-body">
              </div>
            </div>
          </div>

          <div class="card card-catalog">
            <div class="card-header" id="headingSix">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                  Instruments
                </button>
              </h5>
            </div>
            <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
              <div class="card-body">
              {Instruments.map((instrument) => {
                  return (
                    <div class="form-group form-check" key={instrument}>
                      <input type="checkbox" class="form-check-input" id={instrument} />
                      <label class="form-check-label" for="exampleCheck1">{instrument}</label>
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
