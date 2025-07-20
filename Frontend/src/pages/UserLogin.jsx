import React, { useState,useContext } from 'react'
import image from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const UserLogin = () => {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('');

  const [userData, setUserData] = useState({})

  const [user ,setUser] = useContext(UserDataContext);
  const navigate = useNavigate()
  const submitHandler = async (e)=>{
    e.preventDefault();
    
    const userData = {
      email:email,
      password:password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
    if(response.status === 200){
      const data = response.data;
      setUser(data.user)
      localStorage.setItem('token',data.token);
      navigate('/home')
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
        <p className='text-center' >New Here? <Link to={'/signup'} className='text-blue-600'>Create new Account</Link></p>
      </form>
       </div>
       <div className="">
        <Link to={'/captain-login'} className='flex items-center justify-center bg-[#5f90d9] text-black font-semibold mb-7 rounded px-4 py-2  w-full text-lg'>Sign in as Captain</Link>
       </div>
    </div>
  )
}

export default UserLogin