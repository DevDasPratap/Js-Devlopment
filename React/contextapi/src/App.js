import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useContext } from 'react';
import { CounterContext } from './context/Context';

function App() {
  const counterState = useContext(CounterContext)
  console.log('Context', counterState)
  return (
    <div className="App">
      <h1>Count is 0</h1>
      <Counter/>
    </div>
  );
}

export default App;
