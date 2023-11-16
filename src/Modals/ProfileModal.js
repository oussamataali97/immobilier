import React from 'react'
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { BiHome, BiPackage, BiSearch,BiUser } from 'react-icons/bi'
import {logout } from '../Redux/userSlice/AuthSlice';
import { CiLogout } from "react-icons/ci";

import { useDispatch } from 'react-redux'
import welcome from './../assets/welcome.jpg'
import { Link, useNavigate } from 'react-router-dom';

const ProfileModal = ({account,setAccount}) => {
    const dispatch=useDispatch()
const navigate=useNavigate()
    const user=useSelector(state=>state.auth.user)
const handleLogout =()=>{
  dispatch(logout())
  navigate('/login')
}
  return (
    <div>
        <div
onClick={()=>setAccount(!account)}
  className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

>
  <div data-aos="zoom-in"
    data-aos-delay="10"
    data-aos-duration="10"

  className="relative w-[800px] max-h-[450px] overflow-auto  my-6 mx-auto max-w-3xl" >
    <div className="border-0 rounded-lg shadow-lg relative flex flex-row w-full bg-white outline-none focus:outline-none">
        <div className="hidden w-[250px] overflow-y-hidden sticky top-0 bottom-0 max-h-[400px]   bg-gray-100  md:flex flex-col justify-between ">
     <img src={welcome} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className=" p-3 ">


            <ul className='flex flex-col w-full '>
            <li className='flex items-center gap-x-2 border-b-[1px] py-1'>
            {user?.photoURL && <img src={user?.photoURL} alt="" className='w-12 rounded-full'/>}
            <p className='text-center font-bold '>Welcome <span className='text-orange-400'>{user?.displayName}</span></p>
            </li>
          <Link to='/annonces'><li className='py-3 cursor-pointer flex-1 font-bold text-gray-400 hover:text-orange-400 flex items-center gap-x-2'><BiSearch size={24}/> My Annonces</li></Link>
          <li className='py-3 cursor-pointer flex-1 font-bold text-gray-400 hover:text-orange-400 flex items-center gap-x-2'><BiUser size={24}/> Profile</li>
          <li className='py-3 cursor-pointer flex-1 font-bold text-gray-400 hover:text-orange-400 flex items-center gap-x-2'><BiPackage size={24}/> Ads</li>
          <li onClick={handleLogout } className='py-3 cursor-pointer flex-1 font-bold bg-red-600 text-white w-fit px-4 rounded-lg  flex items-center gap-x-2'><CiLogout size={24}/> Logout</li>

        </ul>

        </div>

    </div>

  </div>
</div>
<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>




    </div>
  )
}

export default ProfileModal