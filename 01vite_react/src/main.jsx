import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  const username = "vinay"
  // to inject js in this, use {} it's called as 'evaluated expression' cause we have to first solve problem and then have to inject it we can't directly write code in {}
  // Ex {if(true) username} we can't do this
  // all work should done outside the return 

  return (
    <div>
      <h1>Custom App ! {username}</h1>
    </div>
  )
}


// As we know react convert above App function code in virtual DOM and for that first convert it into object as shown in below
// means it parse into below code
// So what do you think, if im reducing 1 step of react by directly converting it into object and sending it, so will it render it properly?
// The ans is NO, cause react accepts the spcefic parameter which is a function
const reactElement = {
  type: 'a', 
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}





// Wraps the JSX element in parentheses, which is a common practice to avoid automatic semicolon insertion issues.
// look at the App function it returning the code which is wrap inside a () so just wrap it in paranthesis & it will work
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
// this is how react actually convert function into object and create DOM using it
const reactEle = React.createElement(
  'a',  //tag
  {href: 'https://google.com', target: '_blank'},  //object :- attributes
  'Click me to visit google',
  anotherUser    //text inside the tag  // so this is how js is injected which is a variable
  // Assume a scenario where the value of anotherUser is code which is if(true), so as we know we don't write any js code inside the object so that's why we do pass evaluated expression in return
)





ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp/>
  // MyApp()  //we can also use this but use above , at the it is just an function

  // <reactElement/>
  // reactElement

  // anotherEle   

  reactEle

  // <App/>
)