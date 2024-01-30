import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const anotherEle = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = ' Chai aur Code'


/*
  Built in properties that belong on the element
  type,
  key,
  ref,
  props
*/
const reactEle = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp/>
  // MyApp()  //we can also use this but use above 

  // anotherEle   
  reactEle

  // <App/>
)