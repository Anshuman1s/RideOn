import React from 'react'
import image from '../assets/images/Logo.png'
import {Link} from 'react-router-dom'
const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1566243052021-d39ace07c392?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen  pt-8 flex justify-between flex-col w-full">
        <img className='w-25 ml-8 ' src={image} alt="" />
        <div className="bg-white pb-7 py-5 px-5">
          <h2 className='text-2xl font-bold'>Get Started with RideOn</h2>
          <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start