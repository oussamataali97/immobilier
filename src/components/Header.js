import React from 'react'
import logo from './../assets/logo.png'
import {AiOutlinePlusSquare} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-100 '>
      <div className="max-w-5xl mx-auto pb-20 relative">


      <p className='text-right py-3 hover:underline cursor-pointer'>Contactez Nous</p>
      <div className="flex justify-between items-center border-y-[1px] py-3">
        <Link to="/"> <img src={logo} alt="" className=' w-44 '/></Link>
        <ul className='flex items-center space-x-5'>
          <li className='font-bold cursor-pointer hover:text-orange-400'>Connexion</li>
          <li className='cursor-pointer hover:text-orange-400'>Crée un compte</li>
          <li className='flex items-center gap-2 text-green-700 bg-green-100 py-2 hover:outline hover:outline-[1px] hover:bg-green-200 cursor-pointer px-5'><AiOutlinePlusSquare size={20}/> Publier une annance</li>
        </ul>
      </div>

      </div>
    </div>
  )
}

export default Header