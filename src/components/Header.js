import React from 'react'
import logo from './../assets/logo.png'
import {AiOutlinePlusSquare} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BiHome, BiPlus, BiSearch, BiSolidPlusSquare, BiUser } from 'react-icons/bi'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'

const Header = () => {
  return (
    <div className='bg-gray-100  '>
      <div className="max-w-5xl mx-auto pb-[7rem] md:pb-20 relative">


      <p className='text-right font-light py-3 hover:underline cursor-pointer hidden md:block'>Contactez Nous</p>
      <div className="px-3 hidden md:flex flex-col md:flex-row justify-between items-center border-y-[1px] py-3">
        <Link to="/"> <img src={logo} alt="" className=' w-44 py-3 md:py-0'/></Link>
        <ul className='flex items-center space-x-5'>
          <li className='font-bold cursor-pointer hover:text-orange-400'>Connexion</li>
          <li className='cursor-pointer hover:text-orange-400'>Crée un compte</li>
          <li className='flex items-center gap-2 text-green-700 bg-green-100 py-2 hover:outline hover:outline-[1px] hover:bg-green-200 cursor-pointer px-5'><AiOutlinePlusSquare size={20}/> Publier une annance</li>
        </ul>
      </div>

      <div className=" heaad  flex md:hidden flex-col md:flex-row justify-between items-center border-y-[1px] ">
      <ul className='flex w-full '>
          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><BiHome size={17}/> Acceuil</li>
          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><BiSearch size={17}/> Recherche</li>

          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><AiOutlinePlusSquare size={17}/> Publier</li>

          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><MdOutlineEmail size={17}/> Contactez Nous</li>

          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><BiUser size={17}/> Compte</li>

        </ul>

        <Link to="/"> <img src={logo} alt="" className=' w-44 py-3 md:py-0'/></Link>

      </div>


      </div>
    </div>
  )
}

export default Header