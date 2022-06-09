//underWork


import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "../../../sass/_main.scss"

const SearchBar = () => {
  const { onChange, input }: any = useState()

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="search product"
        value={input}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        className="searchBar__input"
      />
      <FontAwesomeIcon icon={faSearch} className="searchBar__icon"/>
    </div>



  )
}

export default SearchBar
