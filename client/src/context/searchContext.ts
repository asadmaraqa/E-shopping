import { createContext } from 'react'
import { SearchContextProps } from '../globalTypes'

const SearchContext = createContext({
  onChange: '',
} as SearchContextProps)

export default SearchContext
