import { createContext } from 'react'
import { searchContextProps } from '../globalTypes'

const SearchContext = createContext({
  onChange: '',
} as searchContextProps)

export default SearchContext
