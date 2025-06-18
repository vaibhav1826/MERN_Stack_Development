import React from 'react'
import UserContextProvider from './context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'
function App() {
  return (
    <UserContextProvider>
      <h1> Learning About Context Api </h1>
      <Login />
      <Profile />
    </UserContextProvider>

  )
}

export default App
