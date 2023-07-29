import React from 'react'
import image from '../assets/29526_thumbnail.jpg'
import image2 from '../assets/29527_thumbnail.jpg'

import image3 from '../assets/29528_thumbnail.jpg'

import image4 from '../assets/29529_thumbnail.jpg'

const MeilleurOffres = () => {
  return (
    <div className='px-3 contain p-3'>
      <p className='text-2xl font-bold py-5'>Meilleures offres immobilières au Maroc</p>
      <div className="grid  md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-2">
      <div className="flex flex-col justify-between relative">
        <img src={image} alt="" />
        <p className='m-2 bg-orange-400 text-white px-2 py-1 text-xs w-fit rounded-lg absolute top-0 left-0'>Premium</p>
        <ul className=' text-white bg-black absolute bottom-0 left-0 right-0 opacity-70'>
          <li className=' mx-1 md:text-xl text-[14px] font-bold '>700 dh</li>
          <li className='mx-1 text-[11px] md:text-[16px] '>Hotel a vendre</li>
        </ul>
      </div>
      <div className="flex flex-col justify-between relative">
        <img src={image2} alt="" />
        <p className='m-2 bg-orange-400 text-white px-2 py-1 text-xs w-fit rounded-lg absolute top-0 left-0'>Premium</p>
        <ul className=' text-white bg-black absolute bottom-0 left-0 right-0 opacity-60'>
          <li className=' mx-1 md:text-xl text-[14px] font-bold '>900000 dh</li>
          <li className='mx-1 text-[11px] md:text-[16px] break-words overflow-hidden w-full text-ellipsis whitespace-nowrap text-sm'>Apart familial comme neuf</li>
        </ul>
      </div>
      <div className="flex flex-col justify-between relative">
        <img src={image3} alt="" />
        <p className='m-2 bg-orange-400 text-white  px-2 py-1 text-xs w-fit rounded-lg absolute top-0 left-0'>Premium</p>
        <ul className=' text-white bg-black absolute bottom-0 left-0 right-0 opacity-70'>
          <li className=' mx-1 md:text-xl text-[14px] font-bold '>700000 dh</li>
          <li className='mx-1 text-[11px] md:text-[16px] break-words overflow-hidden w-full text-ellipsis whitespace-nowrap text-sm'>Terrain titré à vendre à Fés à coté du Palais Royal</li>
        </ul>
      </div>
      <div className="flex flex-col justify-between relative">
        <img src={image4} alt="" />
        <p className='m-2 bg-orange-400 text-white  px-2 py-1 text-xs w-fit rounded-lg absolute top-0 left-0'>Premium</p>
        <ul className=' text-white bg-black absolute bottom-0 left-0 right-0 opacity-70'>
          <li className=' mx-1 md:text-xl text-[14px] font-bold '>70920 dh</li>
          <li className='mx-1 text-[11px] md:text-[16px] break-words overflow-hidden w-full text-ellipsis whitespace-nowrap text-sm'>PENTHOUSE 425 m2 dans Résidence surveillée</li>
        </ul>
      </div>


    </div>
    </div>
  )
}

export default MeilleurOffres