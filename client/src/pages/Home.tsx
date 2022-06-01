import React from 'react'
import Container from '@mui/material/Container';
import AppBar from '../components/AppBar';
import Products from '../components/Products';

const Home = () => {

  return (
    <div className="page">
      <AppBar />
      <Products />
    </div>
  )
}

export default Home