import React, { useState } from 'react'
import image from '../assets/images/Logo.png'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'
const CaptainLogin = () => {
  const[email,setEmail] = useState('')
    const[password,setPassword] = useState('');
    const {captain,setCaptain} = React.useContext(CaptainDataContext)
    const navigate =  useNavigate();
    const submitHandler = async (e)=>{
      e.preventDefault();
      const captain = {
        email:email,
        password:password,
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)
      if(response.status === 200){
        const data = response.data;
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }
      setEmail('');
      setPassword('');
      
    }
    
  return (
     <div className='p-7 h-screen flex flex-col justify-between'>
       <div className="">
        <img className='w-25' src={image} alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} action="">
        <h3 className='text-lg font-medium mb-2'>What's Your email?</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'  type="email" 
         required value={email} onChange={(e)=>{
          setEmail(e.target.value);
          
        }}placeholder='example@gmail.com'/>
        <h3 className='text-lg font-medium mb-2'>Enter password</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'
        required
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        type="password"
        placeholder='password'/>
        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg'>Login</button>
        <p className='text-center' >Want Join as Fleet? <Link to={'/captain-signup'} className='text-blue-600'>Register as Captain</Link></p>
      </form>
       </div>
       <div className="">
        <Link to={'/login'} className='flex items-center justify-center bg-[#5f90d9] text-black font-semibold mb-7 rounded px-4 py-2  w-full text-lg'>Sign in as User</Link>
       </div>
    </div>
  )
}

export default CaptainLogin