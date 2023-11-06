import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

const DetailImo = () => {
  const data=useSelector(state=>state.annonce.selectedAnnonce)
    const dispatch=useDispatch()
    const {id}=useParams()
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
  return (
    <div>
      <p className='text-center font-bold text-red-400'>Detail annonce N° {id}</p>
      <div className=" max-w-4xl mx-auto my-5 w-max  flex flex-col rounded-xl justify-between relative">
            <img src={data?.images} alt="" className='w-96 h-auto object-cover'/>
            <p className='m-2 bg-orange-400 text-white px-2 py-1 text-xs w-fit rounded-lg absolute top-0 left-0'>Premium</p>
            <ul className=' text-white bg-black absolute bottom-0 left-0 right-0 opacity-80'>
              <li className=' mx-1 md:text-xl text-[14px] font-bold '>{data?.price}</li>
              <li className='mx-1 text-[11px] md:text-[16px] '>{data?.name}</li>
            </ul>
          </div>
    </div>
  )
}

export default DetailImo