import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext()

const ShopContextProvider =(props)=>{

    const currency = "$";
    const deliveryFee = 10;
    const [search,setSearch] = useState('')
    const[showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate()

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

const updateQuantity = async(itemId, size, quantity) => {
    let CartData = structuredClone(cartItems);
    CartData[itemId] [size] = quantity
    setCartItems(CartData)
}

const getCartAmount = () =>{
  let totalAmount = 0;
  for(const items in cartItems){
    let itemInfo = products.find((product)=>product._id === items)
    for(const item in cartItems[items]){
      try {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price *cartItems[items][item]
        }
      } catch (error) {
        
      }
    }
  }
  return totalAmount;
}

    const value = {
        products,currency,deliveryFee,search,setSearch,
        showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider