import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { banUser, deleteUser, userDeleted } from '../../redux/slices/users'


const TableRow = ({_id,firstName,secondName,email,picture,role,createdAt,updatedAt,isBanned}:any) => {
  const dispatch=useDispatch()
  const handleDelete=()=>{
    dispatch(deleteUser(_id))
    dispatch(userDeleted(_id))
  }
  const navigate= useNavigate();
  
  return (
    <tr>
      <td><img src={picture} alt={firstName} width={100} /></td>
      <td>{firstName}</td>
      <td>{secondName}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>{createdAt.slice(0, -8)}</td>
      <td>{updatedAt.slice(0, -8)}</td>
      <td>{isBanned ? "Banned" : "Not banned"}</td>
      <td><button onClick={handleDelete}>Delete</button></td>

      <td><button onClick={()=> navigate(`/ModifyProduct/${_id}`)}>Edit</button></td>
      <td><button onClick={()=>  dispatch(banUser(_id,!isBanned))}>{isBanned? "unban" : "ban"}</button></td>

    </tr>
  )
}

export default TableRow