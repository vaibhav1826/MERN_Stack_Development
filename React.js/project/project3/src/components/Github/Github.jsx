import React from 'react'
import {useEffect , useState} from 'react'


function Github(){

    const [data,setData]= useState([])

   useEffect (()=>{
        fetch('https://api.github.com/users/vaibhav1826')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    },[])

    return (
        <>
        <div className="p-4 text-3xl text-center m-4 bg-gray-600 text-white " > Github Followers : {data.followers}</div>
        </>
    )
}

export default Github