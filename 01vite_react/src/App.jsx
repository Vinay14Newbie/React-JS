import Chai from "./chai"

function App() {
  const username = 'chai aur code'

  return (
    // in jsx we can only return one element so close it with '</>' or any other element like '<div/>'
    // we cannot use return multiple elements at once so use </> this called as fragment in React
    <>
      <h1> Chai aur Code with vite | Vinay {username}</h1> {/* {username} = evaluated expression, we write final outcome of js here */}
      <Chai/>
    </>
  )
}

export default App
