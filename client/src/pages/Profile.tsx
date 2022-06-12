import React from 'react'

import AppBar from "../components/AppBar"
import jwt_decode from "jwt-decode";
import UserCard from '../components/UserCard';

const Profile = () => {
  const token:any = localStorage.getItem('myData')
  let UserDecoded: any
  if(token !==null) UserDecoded = jwt_decode(token)

  console.log(token)
  return (
    <div className="page"  >
      <AppBar />
        <UserCard {...UserDecoded}/>
      </div>
  )
}

export default Profile