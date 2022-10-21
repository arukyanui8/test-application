import {React, useState}  from 'react'
import "./App.css"
 
export default function App() {
  let [counter, setCounter] = useState(0);
  const [color, setColor] = useState('blue');

  //Incrementation
  const incrementation = () => {
    setCounter(counter += 1)
    setColor(color => color = 'green')
  }

  //Decrementation
  const decrementation = () => {
    setCounter(counter -= 1)
    setColor(color => color = 'red')
  }
  //Reset
  const reset = () => {
    setCounter(counter = 0)
    console.log(counter)
  }

  return (
    <div id='container'>
      <div className="box">
        <div className='info_block'>
          <h1>Play this game</h1>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, aut! Nobis nostrum et suscipit, culpa sapiente porro quia voluptas ipsam iure nulla perspiciatis quibusdam, a obcaecati labore voluptatum quidem quasi animi. Illum, accusantium. Dolores sed blanditiis alias consequatur quasi quo harum totam earum velit qui. </p>
        </div>
        <span className="counter_output" style={{color}}>{counter}</span>
        <div className="counter_actions">
          <button className='primary_button' onClick={decrementation}>Decrement</button>
          <button className="primary_button" onClick={incrementation}>Increment</button>
        </div>
        <button className='icon_button' onClick={reset}>Reset</button>
        <button className='icon_button' onClick={reset}>Reset</button>
      </div>
  </div>
    
  );
}