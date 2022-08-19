import React from 'react';

// import ReactDOM from 'react-dom/client';
import './App.css';
import { Counter } from './components/Counter';

export default function App() {
  const [count,setCount] = React.useState(0);

  const addOne= ()=> {
    setCount(count+1);
  };

  const subOne= ()=> {
    setCount(count-1);
  };

  const double= ()=> {
    setCount(count*2)
  }

  return (
    <div className="App">
      <Counter count={count} addOne={addOne} subOne={subOne} double={double} />
    </div>
  );
}
