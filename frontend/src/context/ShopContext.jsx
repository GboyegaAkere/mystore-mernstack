import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";


export const ShopContext = createContext()

const ShopContextProvider =(props)=>{

    const currency = "$";
    const deliveryFee = 10;
    const [search,setSearch] = useState('')
    const[showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});

const addToCart = (itemId, size) => {
  setCartItems(prev => {
    const updatedCart = { ...prev };

    // Initialize item if it doesn't exist
    if (!updatedCart[itemId]) {
      updatedCart[itemId] = {};
    }

    // Initialize or increment size quantity
    updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;

    return updatedCart;
  });
};

useEffect(() => {
  console.log(cartItems);
}, [cartItems]);




    const value = {
        products,currency,deliveryFee,search,setSearch,showSearch,setShowSearch,cartItems,addToCart
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider