import React from 'react'

import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CiLocationOn  } from "react-icons/ci";
import { CiRuler } from "react-icons/ci";


const LastOfffers = () => {

  const annonce=useSelector((state)=>state.annonce.annonce)

  return (
    <div className='contain px-6 md:mt-16'>
    <p className='text-2xl font-bold py-5'>The latest real estate offers in Morocco
</p>
    <div className="grid  md:grid-cols-3 grid-cols-2 lg:grid-cols-4 md:gap-x-16 gap-2">
        { annonce
          .map((a,index)=>(
    <div className="flex flex-col justify-between border lg:min-w-[250px] ">
      <img src={a.photoURL} alt="House" className='w-64 h-40 object-cover' />
      <ul className=' p-2 border-t-[1px] my-2'>
        <li className='  text-xl font-bold '>{a?.price} MAD</li>
        <li className=' break-words overflow-hidden text-md w-full text-ellipsis whitespace-nowrap '>{a?.title}</li>
      </ul>
      <ul className=' p-2 mb-2 md:flex justify-between items-center hidden'>
        <li className='border-r-[1px] pr-3  text-gray-600 flex items-center text-xs'> <CiRuler color='orange' size={18}/> {a?.superficie} m² </li>
        <li className=' text-xs flex-1 pl-2  text-gray-600 flex items-center'><CiLocationOn  color='orange ' size={18}/> {a?.Ville}</li>
        <li className='ease-linear bg-orange-600 cursor-pointer hover:bg-orange-700 hover:rounded-lg    duration-200 text-white p-2  rounded-sm font-semibold flex items-center gap-x-1  py-1'>Contact</li>
      </ul>
    </div>
          ))
}



  </div>
  </div>
  )
}

export default LastOfffers