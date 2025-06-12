import React from 'react'
import image from '../assets/images/Logo.png'
const UserLogin = () => {
  return (
    <div className='p-7'>
       <img className='w-25' src={image} alt="" />
      <form action="">
        <h3 className='text-lg font-medium mb-2'>What's Your email?</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm' required type="email" placeholder='example@gmail.com'/>
        <h3 className='text-lg font-medium mb-2'>Enter password</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm' required type="password" placeholder='password'/>
        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg'>Login</button>
      </form>

    </div>
  )
}

export default UserLogin