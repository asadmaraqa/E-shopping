import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "../../../sass/_main.scss"
import { fetchSearch } from '../../../redux/slices/products'
import { useDispatch } from 'react-redux'
import SearchContext from '../../../context/searchContext'

const SearchBar = () => {
  const { onChange, input } = useContext(SearchContext)
  const dispatch = useDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  
  if (input&&onChange) { dispatch(fetchSearch(input)) }

return (
  <div className="searchBar">
    <input
      type="text"
      placeholder="search product by name or description"
      value={input}
      onChange={handleChange}
      className="searchBar__input"
    />
    <FontAwesomeIcon icon={faSearch} className="searchBar__icon" />
  </div>
)
}

export default SearchBar
