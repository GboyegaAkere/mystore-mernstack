import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up")
  return (
    <form action=""  className='flex flex-col items-center w-[90% sm:mx-w-96 m-auto mt-14 gap-4 text-gray-500'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
        </div>
    </form>
  )
}

export default Login