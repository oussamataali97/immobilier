import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiCategoryAlt, BiSearch} from 'react-icons/bi'
import {MdClose, MdOutlineLocationOn} from 'react-icons/md'
import {  and, onSnapshot,query} from "firebase/firestore";
import { collection } from "firebase/firestore";
import { doc, deleteDoc, where} from "firebase/firestore";
import { db } from '../firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import pic1 from './../assets/43.png'
import pic2 from './../assets/44.png'
import pic3 from './../assets/45.png'

import pic4 from './../assets/46.png'

import pic5 from './../assets/47.png'


import pic6 from './../assets/97.png'
import { Link } from 'react-router-dom'
import { searchAnnonce } from '../Redux/annonceSlice/AnnonceSlice';
import { useNavigate } from 'react-router-dom';
const Search = ({city,cityy,setAcctive,setCategoryChosen,setQuery,setCity,querye,acctive,setToggle,toggle,categoryChosen}) => {


const dispatch=useDispatch()

const navigate=useNavigate()



  const handleCat =(e)=>{

    setCategoryChosen(e.target.innerText)
    setToggle(false)
  }

  const handleClck = (e) =>{
    setCity(e.target.innerHTML)
    setAcctive(!acctive)
  }




  const searchData={querye,cityy,categoryChosen}


  const handleSubmitForm =(e)=>{
      e.preventDefault()
      window.localStorage.setItem('searchDat',JSON.stringify(searchData))

      navigate('/search')
/*       const collRef = collection(db,'annonces');
      const  q= query (collRef, where('Ville', '==', cityy ))


  const unsubscribe = onSnapshot(q,(querySnapshot) => {
  const list = [];
  querySnapshot.forEach((doc) => {
  list.push({id:doc.id,...doc.data()})
  console.log(doc)
  });
  console.log(list,'hhh')



  unsubscribe()

  }) */}


  return (
    <>
    <form onSubmit={handleSubmitForm}>
    <div className='flex  flex-col md:flex-row gap-3 md:bg-white  p-6 max-w-5xl md:mx-auto md:shadow-2xl mx-1 -mt-[150px] md:-mt-14'>
      <div className="input-group flex-1 flex flex-col ">
        <label className='font-bold text-sm text-center md:text-left py-4 md:py-0' htmlFor="search">What are you looking for?</label>
        <div className="relative flex items-center ">
        <AiOutlineSearch className='absolute ml-2 text-gray-400 text-xl'/>
        <input type="text" className='border pl-7 p-2 w-full' onChange={(e)=>setQuery(e.target.value)} placeholder='What are you looking for?' id='search' name='search'/>
        </div>

      </div>
      <div className="input-group flex-1 flex flex-col cursor-pointer" onClick={()=>setToggle(true) }>
        <label className='font-bold text-sm hidden md:block' htmlFor="Categories">Choose a category</label>
        <div className="relative flex items-center  ">
        <BiCategoryAlt className='absolute ml-2 text-gray-400 text-xl'/>
        <input type="text" className='border pl-7 p-2 w-full' onChange={(e)=>e} value={categoryChosen} autoComplete='off' placeholder='Choose a category' id='search' name='search'/>

        </div>
      </div>
      <div className="input-group flex-1 flex flex-col">
        <label className='font-bold text-sm hidden md:block' htmlFor="Ville">Choose a city</label>
        <div className="relative flex items-center ">
        <MdOutlineLocationOn className='absolute ml-2 text-gray-400 text-xl'/>
        <input type="text"  className=' border pl-7 p-2 w-full focus:outline-none' onClick={()=>setAcctive(true)} onChange={(e)=>setCity(e.target.value)} value={cityy}  autoComplete="off"  placeholder='All of Morocco' id='search' name='search'/>
        { acctive && <div data-aos="fade-up"   data-aos-delay="1"
    data-aos-duration="9000" className="  bg-white absolute top-10 w-full leading-9 divide-y-[1px] max-h-[14rem] min-h-fit  overflow-auto">
            { city.filter(e=>e.toLowerCase().startsWith(cityy.toLowerCase())
).map((c,index)=> (
              <p key={index} className='font-light text-md cursor-pointer px-2 ' onClick={handleClck}>{c  }</p>
             ) )}
        </div> }
        </div>
        </div>
       <button className=' bg-orange-500 px-5 text-white hidden md:block self-end py-[9px] rounded'><BiSearch size={20} /></button>
       <Link to='/search'> <button className='block w-full bg-orange-400 text-white py-2 visible md:hidden'>Search</button></Link>

    </div>
    </form>
    {toggle && (

<>
<div
onClick={(e)=>setToggle(false)}
  className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

>
  <div data-aos="zoom-in"
    data-aos-delay="10"
    data-aos-duration="10"

  className="relative w-[800px] max-h-[450px] overflow-auto  my-6 mx-auto max-w-3xl" >
    <div className="border-0 rounded-lg shadow-lg relative flex flex-row w-full bg-white outline-none focus:outline-none">
        <div className="hidden w-[250px] overflow-y-hidden sticky top-0 bottom-0 max-h-[400px]   bg-gray-100  p-3 md:flex flex-col justify-between ">
          <ul>
          <li className='bg-[#F44336] text-white  hover:cursor-pointer text-sm font-semibold my-2 px-6 py-2  rounded-full '>Appartement</li>
          <li className=' text-gray-600 hover:text-gray-900  hover:cursor-pointer  text-sm font-semibold my-2 px-6 py-2  rounded-full '>Maison & villas</li>
          <li className=' text-gray-600 hover:text-gray-900  hover:cursor-pointer  text-sm font-semibold my-2 px-6 py-2  rounded-full '> Magasain & commerce</li>
          <li className=' text-gray-600 hover:text-gray-900  hover:cursor-pointer  text-sm font-semibold my-2 px-6 py-2  rounded-full '> Bureau & plateau</li>
          </ul>
          <ul>
            <li onClick={handleCat} className='cursor-pointer bg-white text-sm font-bold text-md text-neutral-600 border-[1px] border-gray-500 p-2 text-center'>Rechercher dans toutes les catégories</li>
          </ul>
        </div>
        <div className=" ">
        <div className="flex flex-col justify-center text-center gap-6 py-3 ">
        <div className="flex boxsw px-4 py-2 items-center space-x-5   rounded-md text-sm   " onClick={handleCat}>
          <img src={pic1} alt="" className='w-8 bg-gray-300 rounded-full  hover:bg-gray-300' />
          <p className="mt-3 font-semibold"    >Apartement</p>
        </div>
        <div className="flex boxsw px-4 py-2 items-center space-x-5   rounded-md text-sm  " onClick={handleCat}>
          <img src={pic2} alt="" className='w-8 bg-gray-300 rounded-full  hover:bg-gray-300' />
          <p className="mt-3 font-semibold "  >House & villa</p>
        </div>
        <div className="flex boxsw px-4 py-2 items-center space-x-5   rounded-md text-sm  " onClick={handleCat}>
          <img src={pic3} alt="" className='w-8 bg-gray-300 rounded-full  hover:bg-gray-300' />
          <p className="mt-3 font-semibold "  >Store & Commerce</p>
        </div>
        <div className="flex boxsw px-4 py-2 items-center space-x-5   rounded-md text-sm  " onClick={handleCat}>
          <img src={pic4} alt="" className='w-8 bg-gray-300 rounded-full  hover:bg-gray-300' />
          <p className="mt-3 font-semibold "  >Desk & Tray</p>
        </div>
        <div className="flex boxsw px-4 py-2 items-center space-x-5   rounded-md text-sm  " onClick={handleCat}>
          <img src={pic5} alt="" className='w-8 bg-gray-300 rounded-full  hover:bg-gray-300 ' />
          <p className="mt-3 font-semibold "  >Land & farmes</p>
        </div>
        <div className="flex boxsw px-4 py-2 items-center space-x-5   rounded-md text-sm  "  onClick={handleCat} id='Autres'>
          <img src={pic6} alt="" className='w-8 bg-gray-300 rounded-full  hover:bg-gray-300' />
          <p className="mt-3 font-semibold " >Others</p>
        </div>

      </div>
        </div>

    </div>

  </div>
</div>
<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
</>
  )

    }

    </>
  )
}

export default Search