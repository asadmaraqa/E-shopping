import React from 'react'
import Container from '@mui/material/Container';
import AppBar from '../components/AppBar';
import Products from '../components/Products';
import { loadproudcts } from '../redux/slices/products';
import { useDispatch } from 'react-redux';

const Home = () => {


  return (
    <div className="page">
      <AppBar />
      <Products />
    </div>
  )
}

export default Home