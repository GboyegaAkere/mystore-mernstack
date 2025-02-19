import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collections/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default App
