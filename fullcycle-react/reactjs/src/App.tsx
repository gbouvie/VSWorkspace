import React from 'react';
import {Title} from "./components/Title";

let count = 0;

function App() {
  return (
    <div>
      <Title color='red' variant='md'>Live do React.js do Full Cycle</Title>
      <p>Contador de cliques: {count}</p>
      <button onChange={(e) => count++}>Me clique!!!</button>
    </div>
  );
}

export default App;
