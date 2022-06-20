import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import { AppState, userTypes } from '../../../globalTypes';
import { modifyUser } from '../../../redux/slices/users';

const ModifyUserForm = () => {
  const { userId } = useParams();
  const user = useSelector((state: AppState) => state.users.list)
  const [filtered] = user.filter((userF:userTypes)=>userId===userF._id)

  const [input, useInput] = useState({
    firstName: filtered.firstName,
    secondName: filtered.secondName,
    phone: filtered.phone,
    address: filtered.address
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useInput((values) => ({ ...values, [name]: value }))
  }
  const dispatch = useDispatch()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (input.firstName !== "") formData.append("firstName", input.firstName)
    if (input.secondName !== "") formData.append("secondName", input.secondName)
    if (input.phone !== 0) formData.append("phone", input.phone as any)
    if (input.address !== "") formData.append("address", input.address)

    dispatch(modifyUser(filtered._id, input))
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>First Name:
        <input placeholder='First Name' type="text" name="firstName" value={input.firstName} onChange={handleChange} />
      </label>
      <label>Second name:
        <input placeholder='second Name' type="text" name="secondName" value={input.secondName} onChange={handleChange} />
      </label>
      <label>Phone:
        <input placeholder='phone' type="number" name="phone" value={input.phone} onChange={handleChange} />
      </label>
      <label>Address:
        <input placeholder='address' type="text" name="address" value={input.address} onChange={handleChange} />
      </label>
      <input type="submit" className='button' />
    </form>
  )
}

export default ModifyUserForm