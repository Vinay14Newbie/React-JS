import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Me from './components/vinay/Me.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   { 
//     path: '/',   //main path
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// 2nd way for above code

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      {/* <Route path='/' element={<Home/> } /> */}
      {/* instead of using above path we can use index to set it as default path */}
      <Route index element={<Home/> } />  
      
      <Route path='about' element={<About/> } />
      <Route path='about/me' element={<Me/> } />


      {/* this is how we can also make nested route */}
      {/* Keep in Mind whenever we have to build nested route, we have to make seperate 'Outlet' for it */}
      {/* you need to use the '<Outlet/>' component in each parent route component | as at now 'About' is a parent route */}
      {/* <Route path='about' element={<About/> } >
        <Route path='me' element={<Me/> }/>
      </Route> */}


      <Route path='contact' element={<Contact/> } />
      <Route
        // 'loader' with it we can directly start to fetch the api | as instance like hovering on github 
        // you can also fetch from here without any problem
        loader={githubInfoLoader}
        
        path='github' element={<Github/> } 
      />
      {/* userid declare by user/handler  And you will get direct access of userid in rendering Component  .."user" */}
      <Route path='user/:userid' element={<User name="user" /> } />
      <Route path='name/:userid' element={<User name="name"/> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // we are rendering router instead of App.jsx
  <React.StrictMode>
    
    {/* it takes props to work 'router'  */}
    <RouterProvider  router={router}/>  
  </React.StrictMode>,
)