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
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* PRODUCT DATA */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        <div className='flex-1 flex flex-col-reverse gap-2 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overtflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productsData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  ) : <div></div>
}

export default Product