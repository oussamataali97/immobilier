import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Login = () => {

  const [toggle,setToggle]=useState(false)
  const [data,setData]=useState({})

  const handleSubmit = (e)=>{
    e.preventDefault()

  }

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data)

  }


  return (
    <div className='mb-16 flex  flex-col gap-3 bg-white  p-6 max-w-md mx-auto loginx -mt-[100px] md:-mt-10'>
      <p className='text-center font-bold text-2xl'>Se connecter</p>
      <p className='text-center text-light'>Connectez-vous à votre compte</p>
      <button className='bg-red-600 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold'> <AiFillGoogleCircle size={30}/> Continuez avec Google</button>

  <form action="" className='mt-4' onSubmit={handleSubmit}>
    <div className="form-group flex flex-col">
    <label className='font-bold mb-1 text-sm' htmlFor="email">Email</label>
    <input type="email" required placeholder='votre email ' onChange={handleChange} className='focus:outline-none px-2 py-2 border border-gray-300' id='email' name='email' />
    </div>
    <div className="form-group relative flex flex-col py-3">
      <p onClick={()=>setToggle(!toggle)}>  {toggle ? <AiFillEye size={25} className='absolute top-[45px] right-3 text-gray-500 cursor-pointer' /> : <AiFillEyeInvisible size={25} className='absolute top-[45px] right-3 text-gray-500 cursor-pointer' onClick={()=>setToggle(!toggle)}/>} </p>
    <label className='font-bold mb-1 text-sm' htmlFor="Password">Password</label>
    <input type={toggle ? "text" : "password"} placeholder='votre password ' onChange={handleChange} className='focus:outline-none px-2 py-2 border border-gray-300' id='Password' name='password' />
    </div>
    <button className='bg-green-600 mt-8 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold'>Se connecter</button>
  </form>
    <p className='text-center font-bold'>Nouveau sur VersusImmobilier? <Link to='/create' className='text-orange-500'>Créer un compte</Link></p>
    </div>
  )
}

export default Login