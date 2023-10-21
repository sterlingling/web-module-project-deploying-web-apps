import './App.css';
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const increaseClick = () => {
    setCount(count + 1);
  }
  const decreaseClick = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={increaseClick}>INCREASE</button>
      <h2>{count}</h2>
      <button onClick={decreaseClick}>DECREASE</button>
    </div>
  );
}

export default App;
