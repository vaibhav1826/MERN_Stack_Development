import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import Contactus from './Contactus.jsx';
import User from './User.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      }, 
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/Contactus',
        element: <Contactus />
      },
      {
        path:'/User/:userid',
        element: <User />
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);