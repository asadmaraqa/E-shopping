import React from 'react'

import AppBar from "../components/AppBar"
import Footer from '../components/Footer';
import UserCard from '../components/Users/UserCard';

const Profile = () => {

  return (
    <div className="page"  >
      <AppBar />
      <UserCard />
      <Footer/>

    </div>
  )
}

export default Profile