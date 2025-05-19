import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
const {productId} = useParams()
const {products} = useContext(ShopContext)
const [productsData, setProductsData] = useState(false)
const [image, setImage] = useState('')

// console.log(productId)

const fetchProductsData = async () => {
  products.map((item)=>{
    if (item._id === productId) {
      setProductsData(item)
      setImage(item.image[0])
      console.log(item)
      return null
    }
  })
}

useEffect(()=>{
  fetchProductsData()
},[productId,products])


  return productsData ? (
    <div>Product</div>
  ) : <div></div>
}

export default Product