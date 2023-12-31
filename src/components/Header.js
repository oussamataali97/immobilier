import React, { useState } from 'react'
import logo from './../assets/logo.png'
import {AiOutlineBell, AiOutlinePlusSquare,AiOutlineProfile,AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BiHome, BiSearch,BiUser } from 'react-icons/bi'
import { MdClose, MdOutlineEmail } from 'react-icons/md'
import {BsAward} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import ProfileModal from '../Modals/ProfileModal'
const Header = () => {
  const user=useSelector(state=>state.auth.user)

  const [profile,setProfile]=useState(false)
  const [account,setAccount]=useState(false)

  const handleClickMenu =()=>{
    setAccount(true)
    setProfile(false)
  }
  return (
    <div className='bg-gray-100  '>
      <div className="max-w-5xl mx-auto pb-[7rem] md:pb-20 relative">


    <Link to='/contact'><p className='text-right font-light py-3 hover:underline cursor-pointer hidden md:block'>Contact us</p></Link>
      <div className="px-3 hidden md:flex flex-col md:flex-row justify-between items-center border-y-[1px] py-3">
        <Link to="/"> <img src={logo} alt="" className=' w-44 py-3 md:py-0'/></Link>
        <ul className='flex items-center space-x-5'>
         {user ? <button  className='bg-green-600 text-white py-2 px-5' onClick={()=>setAccount(!account)}>My Account</button> : <Link to='/login'><li className='font-bold cursor-pointer hover:text-orange-400'>Login</li></Link>}
          {!user && <Link to='/create'><li className='cursor-pointer hover:text-orange-400'>Create an account</li></Link>}
         <Link to='add'> <li className='flex items-center gap-2 text-green-700 bg-green-100 py-2 hover:outline hover:outline-[1px] hover:bg-green-200 cursor-pointer px-5'><AiOutlinePlusSquare size={20}/> Post Annonce</li></Link>
        </ul>
        {account && <ProfileModal setAccount={setAccount} account={account}  /> }
      </div>

      <div className=" heaad  flex md:hidden flex-col md:flex-row justify-between items-center border-y-[1px] ">
      <ul className='flex w-full '>
          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><BiHome size={17}/> Home</li>
          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><BiSearch size={17}/> Search</li>

          <Link to='add'> <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><AiOutlinePlusSquare size={17}/> Post</li></Link>

          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center'><MdOutlineEmail size={17}/> Contact Us</li>

          <li className='py-3 cursor-pointer text-[9px] flex-1 font-bold text-gray-400 hover:text-orange-400 flex flex-col items-center  justify-center' onClick={()=>setProfile(true)}><BiUser size={17}/> My account</li>

        </ul>

        <Link to="/"> <img src={logo} alt="" className=' w-44 py-3 md:py-0'/></Link>

      </div>

      {profile && (
        <>

        <div data-aos={profile ? "fade-left" : "fade-right"} className="profile-phone w-64 bg-white py-10 fixed top-0 right-0 h-screen z-[10000]">
          <MdClose  className='absolute top-3 right-3 text-gray-500' onClick={()=>setProfile(false)} size={30}/>
            <p className='text-center font-bold text-xl'>Welcome </p>
            <ul className=' mt-8 font-bold text-gray-600'>
            <Link to='/annonces' > <li onClick={()=>setProfile(false)} className='flex items-center gap-4 py-4 px-5 hover:text-white hover:bg-orange-400'><AiOutlineProfile size={23} className='text-gray-500'/>My annonces</li></Link>
              {user ? <button   className='flex items-center gap-4 w-full py-4 px-5 hover:text-white hover:bg-orange-400 ' onClick={handleClickMenu}><BiUser size={23} className='text-gray-500'/> Profile</button> : <Link to="/login" onClick={()=>setProfile(false)}><li className='flex items-center gap-4 py-4 px-5 hover:text-white hover:bg-orange-400'><AiOutlineUser size={23} className='text-gray-500'/>Login</li></Link>}
              <li className='flex items-center gap-4 py-4 px-5 hover:text-white hover:bg-orange-400'> <AiOutlineBell size={23} className='text-gray-500'/> Alerts</li>
              <li className='flex items-center gap-4 py-4 px-5 hover:text-white hover:bg-orange-400'><BsAward size={23} className='text-gray-500'/>Ads</li>
            </ul>
        </div>
        <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
</>
      )}
      </div>
      {account && <ProfileModal  setAccount={setAccount} account={account}  /> }

    </div>
  )
}

export default Header