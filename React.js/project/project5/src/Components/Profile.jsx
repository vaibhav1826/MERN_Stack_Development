import React from 'react'
import {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile(){

    const {user} =useContext(UserContext)

    if(!user){
        return (<h2> please Login</h2>)
    }

    return (
    <>
        <div>
            welcome {user.username}
        </div>
    </>
    )
}

export default Profile 