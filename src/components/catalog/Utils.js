import React from "react";
import "./table.css";
import AudioPlayer from './Audioplayer'

const style = {
  icon: {
    color: '#dcad54',
    backgroundColor: 'transparent',


  },
  iconBox: {
    border: 'solid 2px #dfe1e5c2',
    textAlign: 'center',
    paddingTop: 5,
    borderRadius: 50,
    width: 40,
    height: 40,
    cursor: 'pointer'
  },
  loops: {
    border: 'solid 2px #fff',
    textAlign: 'center',
    width: 25,
    height: 25,
    borderRadius: 50,
  }
}

const Buy = () => {
  return (
    <button type="button" className="btn btn-warning">Buy 25€</button>
  )
}

const handleClickPlayer = () => {
  return (
    console.log('click on player')
  )
}

const handleMouseOver = (e) => {
  return (
    console.log('mouse over', e)
  )

}


const Play = () => {
  return (
    <div style={style.iconBox} className="ml-3" onClick={handleClickPlayer} onMouseOver={handleMouseOver} >
      <i
        className="fa fa-play"
        aria-hidden="true"
        style={style.icon}
      ></i>
    </div>
  )
}

const Loops = (props) => {
  console.log(props.number)
  return (
    <div className="row ml-1" >
      {
        props.number.map((number) => {
          return (
            <div className="ml-1" style={style.loops} key={number}>{number}</div>
          )
        })
      }
    </div>
  )
}

export const fixturesData = [
  {
    play: <Play />,
    title: 'Across The Border1',
    url: 'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key: 'Dm',
    length: '2:05',
    author: 'adel',
    bpm: '65',
    mood: 'Cinematic',
    genre: 'Country',
    tag: ['jazz', 'funk', 'blues'],
    loops: <Loops number={[1, 2, 3]} />,
    price: 25,
    player: <AudioPlayer />,
    buy: <Buy />,

  },
  {
    play: <Play />,
    title: 'Across The Border2',
    url: 'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key: 'Dm',
    length: '2:05',
    author: 'adel',
    bpm: '65',
    mood: 'Cinematic',
    genre: 'Country',
    tag: ['jazz', 'funk', 'blues'],
    loops: <Loops number={[1, 2, 3, 4]} />,
    price: 25,
    player: <AudioPlayer />,
    buy: <Buy />,
  },
  {
    play: <Play />,
    title: 'Across The Border3',
    url: 'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key: 'Dm',
    length: '2:05',
    author: 'adel',
    bpm: '65',
    mood: 'Cinematic',
    genre: 'Country',
    tag: ['jazz', 'funk', 'blues'],
    loops: <Loops number={[1, 2, 3, 4, 5]} />,
    price: 25,
    player: <AudioPlayer />,
    buy: <Buy />,
  },
  {
    play: <Play />,
    title: 'Across The Border4',
    url: 'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key: 'Dm',
    length: '2:05',
    author: 'adel',
    bpm: '65',
    mood: 'Cinematic',
    genre: 'Country',
    tag: ['jazz', 'funk', 'blues'],
    loops: <Loops number={[1, 2]} />,
    price: 25,
    player: <AudioPlayer />,
    buy: <Buy />,
  },
  {
    play: <Play />,
    title: 'Across The Border5',
    url: 'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key: 'Dm',
    length: '2:05',
    author: 'adel',
    bpm: '65',
    mood: 'Cinematic',
    genre: 'Country',
    tag: ['jazz', 'funk', 'blues'],
    loops: <Loops number={[1, 2, 3]} />,
    price: 25,
    player: <AudioPlayer />,
    buy: <Buy />,
  },
  {
    play: <Play />,
    title: 'Across The Border6',
    url: 'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key: 'Dm',
    length: '2:05',
    author: 'adel',
    bpm: '65',
    mood: 'Cinematic',
    genre: 'Country',
    tag: ['jazz', 'funk', 'blues'],
    loops: <Loops number={[1]} />,
    price: 25,
    player: <AudioPlayer />,
    buy: <Buy />,
  },
  {
    play: <Play />,
    title: 'Across The Border7',
    url: 'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key: 'Dm',
    length: '2:05',
    author: 'adel',
    bpm: '65',
    mood: 'Cinematic',
    genre: 'Country',
    tag: ['jazz', 'funk', 'blues'],
    loops: <Loops number={[1, 2, 3, 4]} />,
    price: 25,
    player: <AudioPlayer />,
    buy: <Buy />,
  },
  {
    play: <Play />,
    title: 'Across The Border8',
    url: 'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key: 'Dm',
    length: '2:05',
    author: 'adel',
    bpm: '65',
    mood: 'Cinematic',
    genre: 'Country',
    tag: ['jazz', 'funk', 'blues'],
    loops: <Loops number={[1]} />,
    price: 25,
    player: <AudioPlayer />,
    buy: <Buy />,
  },
  {
    play: <Play />,
    title: 'Across The Border9',
    url: 'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key: 'Dm',
    length: '2:05',
    author: 'adel',
    bpm: '65',
    mood: 'Cinematic',
    genre: 'Country',
    tag: ['jazz', 'funk', 'blues'],
    loops: <Loops number={[1, 2, 3, 4]} />,
    price: 25,
    player: <AudioPlayer />,
    buy: <Buy />,
  },
  {
    play: <Play />,
    title: 'Across The Border10',
    url: 'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key: 'Dm',
    length: '2:05',
    author: 'adel',
    bpm: '65',
    mood: 'Cinematic',
    genre: 'Country',
    tag: ['jazz', 'funk', 'blues'],
    loops: <Loops number={[1, 2, 3]} />,
    price: 25,
    player: <AudioPlayer />,
    buy: <Buy />,
  },

]

