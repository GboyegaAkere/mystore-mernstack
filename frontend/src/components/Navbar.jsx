import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between font-medium h-20 border-2 border-amber-200-'>
        <img src={assets.gboyega} className='w-36' alt="" />

    </div>
  )
}

export default Navbar