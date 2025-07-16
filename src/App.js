import './App.css';
import { useState, useEffect } from 'react';

const audio1 = new Audio(`https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3`);
const audio2 = new Audio(`https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3`)
const audio3 = new Audio(`https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3`);
const audio4 = new Audio(`https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3`);
const audio5 = new Audio(`https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3`);
const audio6 = new Audio(`https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3`);
const audio7 = new Audio(`https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3`);
const audio8 = new Audio(`https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3`);
const audio9 = new Audio(`https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3`);



function App() {

  return (
    <div className="App">
      <button onClick={() => {
        audio1.play();
      }}>Hello World</button>
    
      {/*<button>Hello World</button>
      <button>Hello World</button>
      <button>Hello World</button>
      <button>Hello World</button>
      <button>Hello World</button>
      <button>Hello World</button>
      <button>Hello World</button>
      <button>Hello World</button>*/}
    </div>
  );
}

export default App;
