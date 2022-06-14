import axios from 'axios'
import React from 'react'
import AppBar from '../../components/AppBar';
import UsersTable from '../../components/UsersTable';

const Users = () => {
  

  return (
    <div className="page">
      <AppBar />
      <UsersTable />
    </div>
  )
}

export default Users