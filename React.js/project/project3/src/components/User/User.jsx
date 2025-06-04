import React from 'react'
import { useParams } from 'react-router-dom'

function User(){
    const { userId } = useParams();
    return (
        <>
        <h1>User:  {userId} </h1>
        </>
    )
}

export default User