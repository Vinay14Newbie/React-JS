import Chai from "./chai"

function App() {
  const username = 'chai aur code'

  return (
    // we cannot use return multiple elements at once so use </> this called as fragment in React
    <>
      <h1> Chai aur Code with vite | Vinay {username}</h1> {/* {username} = evaluated expression, we write final outcome of js here */}
      <Chai/>
    </>
  )
}

export default App
