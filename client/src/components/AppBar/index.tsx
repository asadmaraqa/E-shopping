import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import SearchBar from './SearchBar'


import { AppState } from '../../globalTypes'
import Cart from '../Cart'
import { useSelector } from 'react-redux'
import Menu from './Menu'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)
  const menuHandler = () => setToggleMenu(!toggleMenu)
  const cartHandler = (): void => setToggleCart(!toggleCart)
  const quantity = useSelector((state: AppState) => state.cart.totalquantity)

  return (
    <header className="header">
      <FontAwesomeIcon
        icon={faBars}
        size="1x"
        className="header__icon-menu"
        onClick={() => setToggleMenu(!toggleMenu)}
      />
      <Link to="/"><h1 aria-label="logo">E-SHOPPING</h1></Link>
      <SearchBar aria-label="search for a product bar" />
      <span className="fa-layers fa-fw">

        <FontAwesomeIcon
          icon={faCartShopping}
          size="2x"
          className="header__icon-cart"
          onClick={() => setToggleCart(!toggleCart)}
        />
        <span className="fa-layers-counter header__badge">{quantity}</span>

        {toggleCart ? <Cart onClick={cartHandler} /> : ''}

      </span>
      {toggleMenu && <Menu onClick={menuHandler} />}
    </header>
  )
}

export default Header
