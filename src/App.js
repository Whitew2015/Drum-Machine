import './App.css';


const audio = new Audio(`https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3`);
function App() {

  return (
    <div className="App">
      <button onClick={() => {
        audio.play();
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
