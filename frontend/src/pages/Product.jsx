import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
const {productId} = useParams()
const {products,currency,addToCart,price} = useContext(ShopContext)
const [productsData, setProductsData] = useState(false)
const [image, setImage] = useState('')
const [size, setSize] = useState('')

//  console.log(productId)

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

          {/* ------------- product image ----------- */}

          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* --------------product informations----------- */}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productsData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className='w-3.5'/>
                <img src={assets.star_icon} alt="" className='w-3.5'/>
                <img src={assets.star_icon} alt="" className='w-3.5'/>
                <img src={assets.star_icon} alt="" className='w-3.5'/>
                <img src={assets.star_dull_icon} alt="" className='w-3.5'/>
                <p className='pl-2'>{123}</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productsData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productsData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productsData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`} key={index}>{item}</button>
                  ))}
                </div>

              </div>
              <button onClick={()=>addToCart(productsData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original product</p>
                <p>Cash on delivery i available on the product</p>
                <p>Easy return and exchange policy within 7days</p>
              </div>
            </div> 
          </div>


                {/* -------------Description $ Review Section ---------- */}
          <div className='mt-20'>
            <div className='flex'>
              <b className='border px-5  py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel tempora sint obcaecati, recusandae delectus quam, porro quis minima quo dignissimos voluptates dicta, voluptas doloremque alias iure! Rerum magni esse dolor.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti voluptatibus inventore nostrum maxime deleniti commodi quibusdam iusto soluta dolore recusandae, at quisquam vel non ratione eligendi tenetur fuga laudantium!</p>
            </div>
          </div>

              {/* ---------- Display related products ------------ */}
         <RelatedProducts category={productsData.category} subcategory={productsData.subcategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product