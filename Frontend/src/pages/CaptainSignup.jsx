import React, { useState } from 'react'
import image from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import { CaptainDataContext} from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const CaptainSignup = () => {
  const navigate = useNavigate();
  const[email,setEmail] = useState('')
     const[password,setPassword] = useState('');
     const [firstName, setFirstName] = useState('')
     const [lastName, setlastName] = useState('')
     const[vehicleColor,setVehicleColor] = useState('');
     const[vehiclePlate,setVehiclePlate] = useState('');
     const[vehicleCapacity,setVehicleCapacity] = useState('');
     const[vehicleType,setVehicleType] = useState('')

     const {captain,setCaptain} = React.useContext(CaptainDataContext);

        const submitHandler = async (e)=>{
          e.preventDefault();
          
          const captainData = {
            fullname:{
              firstname:firstName,
              lastname:lastName,
  
            },
            email:email,
            password:password,
            vechicle:{
              color:vehicleColor,
              plate:vehiclePlate,
              capacity:Number(vehicleCapacity),
              vechicleType:vehicleType
            }
          }
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);
          if(response.status === 201){
            const data = response.data;
            setCaptain(data.captain)
            localStorage.setItem('token',data.token);
            navigate('/captain-home');
          }
          setFirstName('');
          setlastName('');
          setEmail('');
          setPassword('');
          setVehicleColor('');
          setVehicleCapacity('');
          setVehicleType('');
          setVehiclePlate('');
          
        }
  return (
     <div className='p-7 h-screen flex flex-col justify-between'>
       <div className="">
        <img className='w-25' src={image} alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} action="">
        <h3 className='text-lg font-medium mb-2'>What's our Captain Name</h3>
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
        <h3 className='text-base font-medium mb-2'>What's out captain email?</h3>
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

         {/* create input groups for vehicle's data and make sure that vehicleType have car ,auto ,moto   */}
        <h3 className='text-base font-medium mb-2'>Vehicle Type</h3>
        <select className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'
        required
        value={vehicleType}
        onChange={(e)=>{
          setVehicleType(e.target.value);
        }}
      >
        <option value="">Select Vehicle Type</option>
        <option value="car">Car</option>
        <option value="auto">Auto</option>
        <option value="moto">Moto</option>
      </select>
        
        <h3 className='text-base font-medium mb-2'>Vehicle Color</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'
        required
        value={vehicleColor}
        onChange={(e)=>{
          setVehicleColor(e.target.value);
        }}
        type="text"
        placeholder='Vehicle Color'/>
        <h3 className='text-base font-medium mb-2'>Vehicle Plate</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'
        required
        value={vehiclePlate}
        onChange={(e)=>{
          setVehiclePlate(e.target.value);
        }}
        type="text"
        placeholder='Vehicle Plate'/>
        <h3 className='text-base font-medium mb-2'>Vehicle Capacity</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'
        required
        value={vehicleCapacity}
        onChange={(e)=>{
          setVehicleCapacity(e.target.value);
        }}
        type="text"
        placeholder='Vehicle Capacity'/>
        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg'>Create account as Captain</button>
        <p className='text-center' >Already Have account? <Link to={'/captain-login'} className='text-blue-600'>Login</Link></p>
      </form>
       </div> 
       <div className="">
        <p className='text-[12px] leading-tight text-center'>By continuing, you agree to RideOn’s Terms & Conditions and Privacy Policy. Please ride responsibly.<span className='font-bold text-red-600'>Your data is secure with us</span>.</p>
       </div>
    </div>
  )
}

export default CaptainSignup