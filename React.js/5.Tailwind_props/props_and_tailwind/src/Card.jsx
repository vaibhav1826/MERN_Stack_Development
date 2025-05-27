import React from 'react'
import ReactDOM from 'react-dom/client'

function Card(props){
  console.log(props.username)
    return(
        <>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-10 border border-gray-200">
  <img className="w-full h-48 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0WBTtaRK5hERrzYrqjCoKa0e0ZnGIW3Z1Q&s" alt="Nature" />
  
  <div className="p-5">
    <h2 className="text-xl font-semibold text-gray-800">{props.username || "Nature "}</h2>
    <p className="text-gray-600 mt-2 text-sm">
      Explore the wonders of nature with stunning visuals and peaceful moments.
    </p>
    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
      Learn More {props.value}
    </button>
  </div>
</div>
        </>
    )
}

export default Card