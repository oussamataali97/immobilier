import React, { useEffect, useState } from 'react'
import { Hourglass } from 'react-loader-spinner'

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit, BiShowAlt } from 'react-icons/bi';
import { doc, deleteDoc, where } from "firebase/firestore";
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { getUserAnnonces } from '../Redux/annonceSlice/AnnonceSlice';
import {  onSnapshot,query} from "firebase/firestore";
import { collection } from "firebase/firestore";

const AnnoncesPage = () => {

  const dispatch=useDispatch()

  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])

  const id=JSON.parse(window.localStorage.getItem('user'))

  useEffect(()=>{



      const collRef = collection(db,'annonces');
      const  q= query (collRef, where('userId', '==', id.uid ) );


const unsubscribe = onSnapshot(q,(querySnapshot) => {
const list = [];
querySnapshot.forEach((doc) => {
  list.push({id:doc.id,...doc.data()})
});
dispatch(getUserAnnonces(list))

});
return ()=>{
  unsubscribe()
}
}



,[])
  const annonce=useSelector((state)=>state.annonce.userAnnonces)
  const isLoading=useSelector((state)=>state.annonce.isLoading)



const handleDelete =async(id)=>{
  await deleteDoc(doc(db, "annonces", id));
}


if(isLoading){
  return (
    <div className="flex justify-center items-center h-[200px]">
<Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#ebbb2a', '#f7db86']}
/>

    </div>
  )
}

  return (
    <>
            <p className='text-center text-xl text-orange-600 font-bold py-6'> {annonce?.length ? `${ annonce?.length } Annonces` : `${ annonce?.length } Annonce` }  </p>


    <div className='max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4  p-3 gap-x-10 gap-y-5'>
    {annonce ?   annonce?.map(d=>(

<div key={d.id} className="flex flex-col justify-between border lg:min-w-[250px] ">
<img src={d.photoURL} alt="" className=' w-[350px] h-[200px] object-cover ' />
<ul className=' p-2 border-t-[1px] my-2'>
  <li className='  text-xl font-bold '>{d.price} DH </li>
  <li className=' break-words overflow-hidden text-xs w-full text-ellipsis whitespace-nowrap '>{d.title}</li>
</ul>
<ul className=' p-2 mb-2  flex justify-between items-center '>
  <li className='border-r-[1px] pr-3 text-gray-600 text-xs hidden md:block'>Bon Etat</li>
  <li className='text-gray-600 text-xs flex-1 pl-3 hidden md:block'> {d.chambres} </li>
  <li onClick={()=>handleDelete(d.id)} className='bg-red-400 md:px-2 cursor-pointer mr-2 hover:bg-red-700 ease-linear duration-200 flex-1 items-center justify-center flex  rounded-sm text-white font-semibold py-1'><AiFillDelete/> </li>
  <Link to={`/update/${d.id}`} className='flex-1'> <li className='flex-1 items-center justify-center flex  bg-yellow-400 md:px-2 cursor-pointer hover:bg-yellow-700 ease-linear duration-200  rounded-sm text-white font-semibold py-1 mr-1 '><BiEdit/> </li></Link>

  <li className='bg-green-400 md:px-2 cursor-pointer hover:bg-green-700 ease-linear duration-200  rounded-sm text-white font-semibold flex-1 items-center justify-center flex py-1'><BiShowAlt/> </li>
</ul>
</div>

        )) :

     <p>There's no annonces Yet</p>  }


    </div>
    </>
  )
}

export default AnnoncesPage