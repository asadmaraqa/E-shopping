import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

import AppBar from '../../components/AppBar';
import { modifyUser,userAdded } from '../../redux/slices/users';

const ModifyUser = () => {
  const [input,useInput] = useState({
    firstName:"",
    secondName:"",
    phone:0,
    address:""
  });
  const { userId } = useParams();
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useInput((values) => ({ ...values, [name]: value }))
  }
  const dispatch = useDispatch()
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    const formData = new FormData();

    if (input.firstName !== "") formData.append("firstName", input.firstName)
    if (input.secondName !== "") formData.append("secondName", input.secondName)
    if (input.phone !== 0) formData.append("phone", input.phone as any)
    if (input.address !== "") formData.append("address", input.address)

    dispatch(modifyUser(userId,formData))
    for(var pair of formData.entries()) {
      console.log(pair[0]+ ', '+ pair[1]); 
   }

  }
  console.log(input.firstName)
  return (
    <div className='page'>
    <AppBar />
    <form onSubmit={handleSubmit} className="form">
    <label>First Name:
      <input placeholder='First Name' type="text" name="firstName" value={input.firstName} onChange={handleChange}/>
      </label>
      <label>Second name:

      <input placeholder='second Name' type="text" name="secondName" value={input.secondName} onChange={handleChange}/>
      </label>
      <label>Phone:

      <input placeholder='phone'  type="number" name="phone" value={input.phone} onChange={handleChange}/>
      </label>
      <label>Address:

      <input placeholder='address'  type="text" name="address" value={input.address} onChange={handleChange} />
      </label>

    <input type="submit" className='button' />

      </form>
      </div>
  )
}

export default ModifyUser