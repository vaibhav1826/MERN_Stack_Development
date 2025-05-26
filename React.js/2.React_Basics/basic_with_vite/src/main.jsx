import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyAPP(){
  return (
    <>
    <h1>hello! MY Freind</h1>
    </>
  )
}

const kElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'},
  "visit google.com"
);

createRoot(document.getElementById('root')).render(
  <>
    {kElement}
    <MyAPP />
  </>
)
