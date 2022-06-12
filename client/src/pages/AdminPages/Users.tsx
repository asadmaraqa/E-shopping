import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../../redux/slices/users'
import AppBar from '../../components/AppBar';
import UsersTable from '../../components/UsersTable';

const Users = () => {
  const dipatch = useDispatch()
  useEffect(()=>{   dipatch(loadUsers())},[])

  return (
    <div className="page">
      <AppBar />
      <UsersTable />
    </div>
  )
}

export default Users