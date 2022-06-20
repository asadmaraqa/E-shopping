import React from 'react'

import AppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import ModifyUserForm from '../../components/Users/ModifyUser';

const ModifyUser = () => {

  return (
    <div className='page'>
      <AppBar />
      <ModifyUserForm />
      <Footer />
    </div>
  )
}

export default ModifyUser