import React,{useState}  from 'react'
import "./App.css"
 
export default function App() {
  let [counter, setCounter] = useState(0);

  //Incrementation
  const incrementation = () => {
    setCounter(counter += 1)
  }

  //Decrementation
  const decrementation = () => {
    setCounter(counter -= 1)
  }
  //Reset
  const reset = () => {
    setCounter(counter = 0)
  }

  return (
    <div id='container'>
      <div className="box">
        <div className='info_block'>
          <h1>Play this game</h1>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, aut! Nobis nostrum et suscipit, culpa sapiente porro quia voluptas ipsam iure nulla perspiciatis quibusdam, a obcaecati labore voluptatum quidem quasi animi. Illum, accusantium. Dolores sed blanditiis alias consequatur quasi quo harum totam earum velit qui. </p>
        </div>
        <span className="counter_output">{counter}</span>
        <div className="counter_actions">
          <button className='primary_button' onClick={decrementation}>Decrement</button>
          <button className="primary_button" onClick={incrementation}>Increment</button>
        </div>
        <button className='icon_button' onClick={reset}>Reset</button>
      </div>
  </div>
    
  );
}