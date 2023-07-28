import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiCategoryAlt} from 'react-icons/bi'
import {MdOutlineLocationOn} from 'react-icons/md'
const Search = () => {

  const city =['Tanger','Errachidia','Casa','Goulmima','Méknes','Tetouan','Mohamedia','Asfi','Tinghir','Fes','Marakech','Dakhla','Laayoun']

  const [acctive,setAcctive]=useState(false)
  const [cityy,setCity]=useState('')

  const handlefocus =()=>{
    setAcctive(true)
  }

  const handleClick =(e)=>{
console.log(e)
setCity(e.target.innerHTML)
setAcctive(false)
  }

  return (
    <div className='flex gap-3 bg-white p-6 max-w-5xl mx-auto shadow-2xl -mt-14'>
      <div className="input-group flex-1 flex flex-col ">
        <label className='font-bold text-sm' htmlFor="search">Que Recherchez-vous?</label>
        <div className="relative flex items-center ">
        <AiOutlineSearch className='absolute ml-2'/>
        <input type="text" className='border pl-7 p-2 w-full' placeholder='Que Recherchez-vous?' id='search' name='search'/>
        </div>

      </div>
      <div className="input-group flex-1 flex flex-col">
        <label className='font-bold text-sm' htmlFor="Categories">Choisissez une catégorie</label>
        <div className="relative flex items-center  ">
        <BiCategoryAlt className='absolute ml-2'/>
        <input type="text" className='border pl-7 p-2 w-full' placeholder='Maison & villa' id='search' name='search'/>

        </div>
        </div>
      <div className="input-group flex-1 flex flex-col">
        <label className='font-bold text-sm' htmlFor="Ville">Choisissez une ville</label>
        <div className="relative flex items-center ">
        <MdOutlineLocationOn className='absolute ml-2'/>
        <input type="text"  className=' border pl-7 p-2 w-full focus:outline-none' onChange={(e)=>setCity(e.target.value)} value={cityy ? cityy : ''}  autoComplete="off"  onFocus={handlefocus}  placeholder='Tout le Maroc' id='search' name='search'/>
        {acctive && <div data-aos="fade-up"   data-aos-delay="1"
    data-aos-duration="9000" className=" bg-white absolute top-10 w-full leading-9 divide-y-[1px] h-[14rem] overflow-auto">
            {city.map((c,index)=>(
              <p key={index} className='font-light text-md cursor-pointer px-2 hover:bg-gray-100' onClick={handleClick}>{c}</p>
            ))}
        </div> }
        </div>
        </div>


    </div>
  )
}

export default Search