import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contactus from './components/Contactus.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

const router= createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children:[{
      path:"/",
      element: <Home />
    },{
      path:"about",
      element: <About />
    },
    {
      path:"Contactus",
      element:<Contactus />
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
