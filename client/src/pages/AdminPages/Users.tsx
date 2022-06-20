import React from 'react'

import AppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import UsersTable from '../../components/Users/UsersTable';

const Users = () => {

  return (
    <div className="page">
      <AppBar />
      <UsersTable />
      <Footer />
    </div>
  )
}

export default Users