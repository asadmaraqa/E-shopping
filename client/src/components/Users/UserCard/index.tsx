import React from 'react'
import jwtDecode from 'jwt-decode'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AppState, UserTypes } from '../../../globalTypes'
import Button from '../../Button'


const UserCard = () => {

  const token = localStorage.getItem("myData") as string;
  let user: UserTypes;
  if(token) user = jwtDecode(token)
  const navigate= useNavigate()
  const userData = useSelector((state: AppState) => state.users.list)
  const [filtered] = userData.filter((userF) => user.email===userF.email)

  return (
    <div>
      <img src={filtered.picture} alt="profile" />
      <h2>Name: {filtered.firstName} {filtered.secondName}</h2>
      <h2>Email: {filtered.email} </h2>
      <h2>Phone: {filtered.phone} </h2>
      <h2>Address:  {filtered.address}</h2>
      <Button title='edit' onClick={() => navigate(`/modifyUser/${filtered._id}`)} className="button__modify" />
    </div>

  )
}

export default UserCard