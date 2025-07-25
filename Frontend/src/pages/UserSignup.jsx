import React, { useState } from 'react'
import image from '../assets/images/Logo.png'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserDataContext } from '../context/UserContext'
const UserSignup = () => {
   const[email,setEmail] = useState('')
   const[password,setPassword] = useState('');
   const [firstName, setFirstName] = useState('')
   const [lastName, setlastName] = useState('')
   const [UserData, setUserData] = useState({})
   const navigate = useNavigate()
   const [user,setUser] = React.useContext(UserDataContext)
      const submitHandler = async(e)=>{
        e.preventDefault();
        
        const newUser = {
          
          fullname:{
            firstname:firstName,
            lastname:lastName,

          },
          email:email,
          password:password
        
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
        if(response.status === 201){
          const data = response.data
          setUser(data.user)
          localStorage.setItem("token",data.token);
          navigate('/home');
        }
        
        
        setFirstName('');
        setlastName('');
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
        <h3 className='text-lg font-medium mb-2'>Enter Your Full name</h3>
        <div className="flex gap-5 mb-5">
          <input className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-xm'  type="text" 
         required
         value={firstName}
         onChange={(e)=>{
          setFirstName(e.target.value);
         }}
        placeholder='Firstname'/>
        
          <input className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-xm'  type="text" 
         required
         value={lastName}
         onChange={(e)=>{
          setlastName(e.target.value);
         }}
          placeholder='Lastname'/>
        
        </div>
        <h3 className='text-base font-medium mb-2'>What's Your email?</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'  type="email" 
         required value={email} onChange={(e)=>{
          setEmail(e.target.value);
          
        }}placeholder='example@gmail.com'/>
        <h3 className='text-base font-medium mb-2'>Enter password</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'
        required
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        type="password"
        placeholder='password'/>
        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg'>Submit</button>
        <p className='text-center' >Already Have account? <Link to={'/login'} className='text-blue-600'>Login</Link></p>
      </form>
       </div>
       <div className="">
        <p className='text-[12px] leading-tight text-center'>By continuing, you agree to RideOn’s Terms & Conditions and Privacy Policy. Please ride responsibly.<span className='font-bold text-red-600'>Your data is secure with us</span>.</p>
       </div>
    </div>
  )
}

export default UserSignup