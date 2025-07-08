import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";


export const ShopContext = createContext()

const ShopContextProvider =(props)=>{

    const currency = "$";
    const deliveryFee = 10;
    const [search,setSearch] = useState('')
    const[showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});

const addToCart = (itemId, size) => {
  if (!size) {
    toast.error("Select product size")
    return
  }
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

const getCartCount = () => {
  let totalCount = 0;

  for (const itemId in cartItems) {
    const sizes = cartItems[itemId];

    for (const size in sizes) {
      totalCount += sizes[size];
    }
  }

  return totalCount;
};


useEffect(() => {
  console.log(cartItems);
}, [cartItems]);




    const value = {
        products,currency,deliveryFee,search,setSearch,
        showSearch,setShowSearch,cartItems,addToCart,getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider