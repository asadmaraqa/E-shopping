import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

const UserCard = () => {

  const user =  useSelector((state: any) => state.users.currentUser[0])
  const navigate= useNavigate()
  return (
    <div>
      <img src={user.picture} alt="profile" />
      <h2>Name: {user.firstName} {user.secondName}</h2>
      <h2>Email: {user.email} </h2>
      <h2>Phone: {user.phone} </h2>
      <h2>Address:  {user.address}</h2>

      <Button title='edit' onClick={() => navigate(`/modifyUser/${user._id}`)} className="button__modify" />
    </div>
  )
}

export default UserCard