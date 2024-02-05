import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    if(counter >= 10) return
    console.log('clicked', counter);

    // increases by 5 at once
    setCounter(prevCounter => {return prevCounter+1})  //same as below
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }

  const subtractValue = () => {
    if(counter === 0) return
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button> <br />
      <button onClick={subtractValue}>Remove value</button>
    </>
  )
}

export default App
