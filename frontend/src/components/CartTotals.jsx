import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotals = () => {
    const{currency,deliveryFee, getCartAmount} = useContext(ShopContext)
  return (
    <div>CartTotals</div>
  )
}

export default CartTotals