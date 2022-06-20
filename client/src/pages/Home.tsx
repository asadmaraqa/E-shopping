import React, { useContext } from 'react'
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import SearchContext from '../context/searchContext';

const Home = () => {
  const { onChange, input } = useContext(SearchContext)

  return (
    <div className="page">
      <AppBar />
      {!input ? <img src={require("../pictures/banner.jpg")} height="500px" alt="banner" /> : ""}
      <Products />
      <Footer />

    </div>
  )
}

export default Home