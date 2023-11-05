import React, { useState } from 'react'
import logo from './../assets/logo.png'
import {AiOutlineBell, AiOutlinePlusSquare,AiOutlineProfile,AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BiHome, BiSearch,BiUser } from 'react-icons/bi'
import { MdClose, MdOutlineEmail } from 'react-icons/md'
import {BsAward} from 'react-icons/bs'
import {logout } from '../Redux/userSlice/AuthSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const Header = () => {
  const user=useSelector(state=>state.auth.user)
  const [profile,setProfile]=useState(false)
  return (
    <div className='bg-gray-100  '>
      <div className="max-w-5xl mx-auto pb-[7rem] md:pb-20 relative">


    <Link to='/contact'><p className='text-right font-light py-3 hover:underline cursor-pointer hidden md:block'>Contactez Nous</p></Link>
      <div className="px-3 hidden md:flex flex-col md:flex-row justify-between items-center border-y-[1px] py-3">
        <Link to="/"> <img src={logo} alt="" className=' w-44 py-3 md:py-0'/></Link>
        <ul className='flex items-center space-x-5'>
         {user ? <button  className='bg-green-600 text-white py-2 px-5'>Mon compte</button> : <Link to='/login'><li className='font-bold cursor-pointer hover:text-orange-400'>Connexion</li></Link>}
          {!user && <Link to='/create'><li className='cursor-pointer hover:text-orange-400'>Crée un compte</li></Link>}
          <li className='flex items-center gap-2 text-green-700 bg-green-100 py-2 hover:outline hover:outline-[1px] hover:bg-green-200 cursor-pointer px-5'><AiOutlinePlusSquare size={20}/> Publier une annance</li>
        </ul>
      </div>

      <div className=" heaad  flex md:hidden flex-col md:flex-row justify-between items-center border-y-[1px] ">
      <ul className='flex w-full '>
          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><BiHome size={17}/> Acceuil</li>
          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><BiSearch size={17}/> Recherche</li>

          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><AiOutlinePlusSquare size={17}/> Publier</li>

          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><MdOutlineEmail size={17}/> Contactez Nous</li>

          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center' onClick={()=>setProfile(true)}><BiUser size={17}/> Compte</li>

        </ul>

        <Link to="/"> <img src={logo} alt="" className=' w-44 py-3 md:py-0'/></Link>

      </div>

      {profile && (
        <>
        <div data-aos={profile ? "fade-left" : "fade-right"} className="profile-phone w-64 bg-white py-10 fixed top-0 right-0 h-screen z-[10000]">
          <MdClose  className='absolute top-3 right-3 text-gray-500' onClick={()=>setProfile(false)} size={30}/>
            <p className='text-center font-bold text-xl'>Bienvenue </p>
            <ul className=' mt-8 font-bold text-gray-600'>
              <li className='flex items-center gap-4 py-4 px-5 hover:text-white hover:bg-orange-400'><AiOutlineProfile size={23} className='text-gray-500'/>Mes annonces</li>
              <Link to="/login" onClick={()=>setProfile(false)}><li className='flex items-center gap-4 py-4 px-5 hover:text-white hover:bg-orange-400'><AiOutlineUser size={23} className='text-gray-500'/>Profile</li></Link>
              <li className='flex items-center gap-4 py-4 px-5 hover:text-white hover:bg-orange-400'> <AiOutlineBell size={23} className='text-gray-500'/> Alertes</li>
              <li className='flex items-center gap-4 py-4 px-5 hover:text-white hover:bg-orange-400'><BsAward size={23} className='text-gray-500'/>Publicité</li>
            </ul>
        </div>
        <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
</>
      )}
      </div>
    </div>
  )
}

export default Header