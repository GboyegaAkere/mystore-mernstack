import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch} =useContext(ShopContext)
    
  return (
    <div>
      <h1>heloo</h1>
    </div>
  )
}

export default SearchBar
