import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import Card from './Card.jsx'

function App() {
  let myobj={
    username:"vaibhav",
    age:19
  }

  return (
    <>
      <h1 className='bg-green-800'>tailwind test</h1>
      <Card  username ="vaibhav "  SomeObj={myobj} value="vaibhav"/>
      <Card />
    </>
  )
}

export default App
