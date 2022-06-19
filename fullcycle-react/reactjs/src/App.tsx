import { Counter } from './components/Counter';
import {Title} from "./components/Title";

function App() {
  console.log("Renderizou app");
  return (
    <div>
      <Title color='red' variant='md'>Live do React.js do Full Cycle</Title>
      <Counter/>
    </div>
  );
}

export default App;
