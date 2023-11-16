import React from 'react'
import { Search } from '../components'
import {  and, onSnapshot,query} from "firebase/firestore";
import { collection } from "firebase/firestore";
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit, BiShowAlt } from 'react-icons/bi';
import { useState } from 'react';
import { doc, deleteDoc, where} from "firebase/firestore";
import { db } from '../firebase';
import { useEffect } from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const SearchPage = () => {
  const [queryElement,setQueryElement]=useState([])
const data=JSON.parse(window.localStorage.getItem('searchDat'))
console.log(data,'hh')
  useEffect(()=>{

    window.scrollTo(0, 0);

      const collRef = collection(db,'annonces');
      const  q= query (collRef, where('title', '==', data?.querye ),where('Ville', '==', data?.cityy ))


const unsubscribe = onSnapshot(q,(querySnapshot) => {
const queryElement = [];
querySnapshot.forEach((doc) => {
  queryElement.push({id:doc.id,...doc.data()})
  console.log(doc)
});
setQueryElement(queryElement)


});

      return ()=>{
        unsubscribe()
      }
  }



   ,[data])


   console.log(queryElement,'element')
  return (
    <div>

    <>
            <p className='text-center text-xl text-orange-600 font-bold py-6'> {queryElement?.length ? `${ queryElement?.length } Annonce` : `${ queryElement?.length } Annonce` }  </p>


    <div className='max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4  p-3 gap-x-10 gap-y-5'>
    {queryElement ?   queryElement?.map(d=>(

<div key={d.id} className="flex flex-col justify-between border lg:min-w-[250px] ">
<img src={d.photoURL} alt="" />
<ul className=' p-2 border-t-[1px] my-2'>
  <li className='  text-xl font-bold '>{d.price} DH </li>
  <li className=' break-words overflow-hidden text-xs w-full text-ellipsis whitespace-nowrap '>{d.title}</li>
</ul>
<ul className=' p-2 mb-2 md:flex justify-between items-center hidden'>
  <li className='border-r-[1px] pr-3 text-gray-600 text-xs'>Bon Etat</li>
  <li className='text-gray-600 text-xs flex-1 pl-3'> {d.chambres} </li>
  <li  className='bg-red-400 md:px-2 cursor-pointer mr-2 hover:bg-red-700 ease-linear duration-200  rounded-sm text-white font-semibold py-1'><AiFillDelete/> </li>
  <li className='bg-yellow-400 md:px-2 cursor-pointer hover:bg-yellow-700 ease-linear duration-200  rounded-sm text-white font-semibold py-1 mr-1 '><BiEdit/> </li>

  <li className='bg-green-400 md:px-2 cursor-pointer hover:bg-green-700 ease-linear duration-200  rounded-sm text-white font-semibold py-1'><BiShowAlt/> </li>
</ul>
</div>

        )) :

     <p>There's no annonces Yet</p>  }


    </div>
    </>
    </div>
  )
}

export default SearchPage