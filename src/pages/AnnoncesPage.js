import React, { useEffect, useState } from 'react'

import { getAnnonces } from '../Redux/annonceSlice/AnnonceSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AnnoncesPage = () => {
const annonce=useSelector((state)=>state.annonce.annonce)


  return (
    <>
            <p className='text-center text-xl text-orange-600 font-bold py-6'>Mes Annonces </p>



    <div className='max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4  p-3 gap-x-10 gap-y-5'>

        {annonce.map(d=>(

<div key={d.id} className="flex flex-col justify-between border lg:min-w-[250px] ">
<img src={d.photoURL} alt="" />
<ul className=' p-2 border-t-[1px] my-2'>
  <li className='  text-xl font-bold '>{d.price} DH </li>
  <li className=' break-words overflow-hidden text-xs w-full text-ellipsis whitespace-nowrap '>{d.title}</li>
</ul>
<ul className=' p-2 mb-2 md:flex justify-between items-center hidden'>
  <li className='border-r-[1px] pr-3 text-gray-600 text-xs'>Bon Etat</li>
  <li className='text-gray-600 text-xs flex-1 pl-3'> {d.chambres} </li>
  <li className='bg-orange-400 md:px-2 cursor-pointer hover:bg-orange-700 ease-linear duration-200  rounded-sm text-white font-semibold   py-1'> {d.Ville} </li>
</ul>
</div>

        ))}
    </div>
    </>
  )
}

export default AnnoncesPage