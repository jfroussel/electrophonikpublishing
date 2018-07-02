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
    tools:<AudioPlayer />,
    buy:<Buy />,
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

