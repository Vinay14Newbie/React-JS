import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    if(counter === 10) return
    console.log('clicked', counter);
    counter += 1
    setCounter(counter)
  }

  const subtractValue = () => {
    if(counter === 0) return
    setCounter(counter-=1)
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
