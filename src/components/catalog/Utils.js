import React from "react";
import namor from "namor";
import "./table.css";
import AudioPlayer from './Audioplayer'


const Buy = () => {
  return (
    <button type="button" className="btn btn-warning">Buy 25€</button>
  )
}
const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    tools: <AudioPlayer />,
    buy: <Buy />,
    loops: '1-2-3-4',
    bpm: Math.floor(Math.random() * 100),
    length: '2:25',
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33 ? "complicated" : "single"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export const fixturesData = [
  {
    title: 'Across The Border',
    url:'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key:'Dm',
    length:'2:05',
    author:'adel',
    bpm:'65',
    mood:'Cinematic',
    genre:'Country',
    tag:['jazz','funk','blues'],
    loops:[1,2,3,4,5],
    price:25,
    player:<AudioPlayer />,
    buy:<Buy />,

  },
  {
    title: 'Across The Border',
    url:'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key:'Dm',
    length:'2:05',
    author:'adel',
    bpm:'65',
    mood:'Cinematic',
    genre:'Country',
    tag:['jazz','funk','blues'],
    loops:[1,2,3,4,5],
    price:25,
    player:<AudioPlayer />,
    buy:<Buy />,
  },
  {
    title: 'Across The Border',
    url:'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key:'Dm',
    length:'2:05',
    author:'adel',
    bpm:'65',
    mood:'Cinematic',
    genre:'Country',
    tag:['jazz','funk','blues'],
    loops:[1,2,3,4,5],
    price:25,
    player:<AudioPlayer />,
    buy:<Buy />,
  },
  {
    title: 'Across The Border',
    url:'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key:'Dm',
    length:'2:05',
    author:'adel',
    bpm:'65',
    mood:'Cinematic',
    genre:'Country',
    tag:['jazz','funk','blues'],
    loops:[1,2,3,4,5],
    price:25,
    player:<AudioPlayer />,
    buy:<Buy />,
  },
  {
    title: 'Across The Border',
    url:'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key:'Dm',
    length:'2:05',
    author:'adel',
    bpm:'65',
    mood:'Cinematic',
    genre:'Country',
    tag:['jazz','funk','blues'],
    loops:[1,2,3,4,5],
    price:25,
    player:<AudioPlayer />,
    buy:<Buy />,
  },
  {
    title: 'Across The Border',
    url:'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key:'Dm',
    length:'2:05',
    author:'adel',
    bpm:'65',
    mood:'Cinematic',
    genre:'Country',
    tag:['jazz','funk','blues'],
    loops:[1,2,3,4,5],
    price:25,
    player:<AudioPlayer />,
    buy:<Buy />,
  },
  {
    title: 'Across The Border',
    url:'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key:'Dm',
    length:'2:05',
    author:'adel',
    bpm:'65',
    mood:'Cinematic',
    genre:'Country',
    tag:['jazz','funk','blues'],
    loops:[1,2,3,4,5],
    price:25,
    player:<AudioPlayer />,
    buy:<Buy />,
  },
  {
    title: 'Across The Border',
    url:'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key:'Dm',
    length:'2:05',
    author:'adel',
    bpm:'65',
    mood:'Cinematic',
    genre:'Country',
    tag:['jazz','funk','blues'],
    loops:[1,2,3,4,5],
    price:25,
    player:<AudioPlayer />,
    buy:<Buy />,
  },
  {
    title: 'Across The Border',
    url:'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key:'Dm',
    length:'2:05',
    author:'adel',
    bpm:'65',
    mood:'Cinematic',
    genre:'Country',
    tag:['jazz','funk','blues'],
    loops:[1,2,3,4,5],
    price:25,
    player:<AudioPlayer />,
    buy:<Buy />,
  },
  {
    title: 'Across The Border',
    url:'data/_Across The Border_ CinematicCountry Dm 65bpm.mp3',
    key:'Dm',
    length:'2:05',
    author:'adel',
    bpm:'65',
    mood:'Cinematic',
    genre:'Country',
    tag:['jazz','funk','blues'],
    loops:[1,2,3,4,5],
    price:25,
    player:<AudioPlayer />,
    buy:<Buy />,
  },

]

