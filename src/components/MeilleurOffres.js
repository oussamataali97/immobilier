import React from 'react'

import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getImmo } from '../Redux/annonceSlice/AnnonceSlice'
import { Link } from 'react-router-dom'
const MeilleurOffres = () => {


  const data=useSelector((state)=>state.annonce.annonce)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getImmo())
  } ,[])


  if(data.length!=0){
    return (
      <div className='px-3 contain p-3'>
        <p className='text-2xl font-bold py-5'>Meilleures offres immobilières au Maroc</p>
        <div className="grid  md:grid-cols-3 grid-cols-2 lg:grid-cols-4  gap-2">
          { data.filter((ele)=>ele.isPremium)
          .map((a,index)=>(
          <Link key={index} to={`/immo/${a?.id}`}>  <div className="flex flex-col justify-between relative">
            <img src={a?.images} alt="" />
            {a?.isPremium && <p className='m-2 bg-orange-400 text-white px-2 py-1 text-xs w-fit rounded-lg absolute top-0 left-0'>Premium</p>}
            <ul className=' text-white bg-black absolute bottom-0 left-0 right-0 opacity-70'>
              <li className=' mx-1 md:text-xl text-[14px] font-bold '>{a?.price}</li>
              <li className='mx-1 text-[11px] md:text-[16px] '>{a?.name}</li>
            </ul>
          </div></Link>
          )
          ).slice(4,8)

          }




      </div>
      </div>
    )
  }


}

export default MeilleurOffres