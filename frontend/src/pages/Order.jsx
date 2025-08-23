import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'


const Order = () => {
  const {products, currency} = useContext(ShopContext)
  return (
    <div className='border-t pt-16'>


        <div className='text-2xl'>
            <Title text1={"MY"} text2={"ORDERS"}/>
        </div>

        <div>
          {
            products.slice(1,4).map((item,index)=>( 
              <div key={index} className= 'flex py-4 border-b text-gray-700 flex-col md:flex-row md:items-center md:justify-between'>
                  <div className='flex items-start gap-6 text-sm'>
                      <img src={item.image[0]} alt="" className='w-16 smw-20' />
                      <div>
                        <p  className='sm-text-base font-medium'>{item.name}</p>
                        <div className='flex items-center gap-3 mt-2 text-base text-gray-400'>
                            <p className='text-lg'>{currency}{item.price}</p>
                            <p>Quantiy</p>
                            <p>Size:M</p>
                        </div>
                        <p className='mt-2'>Date: <span className='text-gray-400'>25th, Jan 2025</span></p>
                      </div>
                  </div>
                  <div className='md:w-1/2 flex justify-between'>
                      <div className='flex items-center gap-2'>
                        <p className='min-w-2 h-2 rounded-full bg-green-400'></p>
                        <p className=''>Ready to Ship</p>
                      </div>
                      <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                  </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Order