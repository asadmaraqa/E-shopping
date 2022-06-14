import { createContext } from 'react'

export interface searchContextProps {
  onChange: any
  input: any
}

const SearchContext = createContext({
  onChange: '',
} as searchContextProps)

export default SearchContext
