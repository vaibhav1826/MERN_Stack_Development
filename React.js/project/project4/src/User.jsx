import React from 'react'
import { useParams } from 'react-router-dom'


function User(){
    const {userid}= useParams()
return (
<>
<div className="flex justify-center ">
<h1 className="text-bold text-2xl text-orange-700 m-4 p-2">User: {userid}</h1>
</div>

</>
)
}

export default User