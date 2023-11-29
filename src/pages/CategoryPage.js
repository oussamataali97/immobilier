import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {  onSnapshot,query} from "firebase/firestore";
import { doc, deleteDoc, where } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from '../firebase';
import { getUserAnnoncesCatego } from '../Redux/annonceSlice/AnnonceSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CiLocationOn  } from "react-icons/ci";
import { CiRuler } from "react-icons/ci";

const CategoryPage = () => {
    const dispatch=useDispatch()

    useEffect(()=>{

        window.scrollTo(0, 0);

      const collRef = collection(db,'annonces');
      const  q= query (collRef, where('category', '==', categorie ) );


const unsubscribe = onSnapshot(q,(querySnapshot) => {
const list = [];
querySnapshot.forEach((doc) => {
  list.push({id:doc.id,...doc.data()})
});
dispatch(getUserAnnoncesCatego(list))

});
return ()=>{
  unsubscribe()
}


    },[])


    const annonce=useSelector((state)=>state.annonce.AnnonceCateg)
    console.log(annonce)
    const isLoading=useSelector((state)=>state.annonce.isLoading)
    const {categorie}=useParams()
    console.log(categorie)
  return (
    <div className='max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4  p-3 gap-x-10 gap-y-5'>
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
  )
}

export default CategoryPage