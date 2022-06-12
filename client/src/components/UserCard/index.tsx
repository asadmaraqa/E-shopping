import React from 'react'
import { useSelector } from 'react-redux'

const UserCard = ({ firstName, secondName, email,picture }: any) => {
  const user =  useSelector((state: any) => state.auth.list)
  console.log(user.firstName)
  return (
    <div>
      <img src={picture} alt="profile" />
      <h2>Name: {firstName} {secondName}</h2>
      <h2>Email: {email} </h2>
    </div>
  )
}

export default UserCard