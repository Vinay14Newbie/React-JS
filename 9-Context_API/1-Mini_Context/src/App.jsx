import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    // here all components has been wrapped inside the Provider & all components inside it will have the access of Globally declared states
    <UserContextProvider>
      <h1>Hello, Vinay is here</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
