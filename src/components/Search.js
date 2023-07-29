import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiCategoryAlt} from 'react-icons/bi'
import {MdOutlineLocationOn} from 'react-icons/md'
const Search = () => {

  const city =['Errissani','Tadighoust','Goulmim','Tileft','Tanger','Errachidia','Casa','Goulmima','Méknes','Tetouan','Mohamedia','Asfi','Tinghir','Fes','Marakech','Dakhla','Laayoun']

  const [acctive,setAcctive]=useState(true)
  const [cityy,setCity]=useState('')

  const handlefocus =()=>{
    setAcctive(true)
  }

  const handleClck = (e) =>{
    setCity(e.target.innerHTML)
    setAcctive(!acctive)
  }


  console.log(cityy)

  return (
    <div className='flex  flex-col md:flex-row gap-3 md:bg-white  p-6 max-w-5xl md:mx-auto md:shadow-2xl mx-1 -mt-[150px] md:-mt-14'>
      <div className="input-group flex-1 flex flex-col ">
        <label className='font-bold text-sm text-center md:text-left py-4 md:py-0' htmlFor="search">Que Recherchez-vous?</label>
        <div className="relative flex items-center ">
        <AiOutlineSearch className='absolute ml-2'/>
        <input type="text" className='border pl-7 p-2 w-full' placeholder='Que Recherchez-vous?' id='search' name='search'/>
        </div>

      </div>
      <div className="input-group flex-1 flex flex-col">
        <label className='font-bold text-sm hidden md:block' htmlFor="Categories">Choisissez une catégorie</label>
        <div className="relative flex items-center  ">
        <BiCategoryAlt className='absolute ml-2'/>
        <input type="text" className='border pl-7 p-2 w-full' placeholder='Maison & villa' id='search' name='search'/>

        </div>
        </div>
      <div className="input-group flex-1 flex flex-col">
        <label className='font-bold text-sm hidden md:block' htmlFor="Ville">Choisissez une ville</label>
        <div className="relative flex items-center ">
        <MdOutlineLocationOn className='absolute ml-2'/>
        <input type="text"  className=' border pl-7 p-2 w-full focus:outline-none' onClick={()=>setAcctive(true)} onChange={(e)=>setCity(e.target.value)} value={cityy}  autoComplete="off"  placeholder='Tout le Maroc' id='search' name='search'/>
        { acctive && <div data-aos="fade-up"   data-aos-delay="1"
    data-aos-duration="9000" className="  bg-white absolute top-10 w-full leading-9 divide-y-[1px] h-[14rem] overflow-auto">
            {city.filter(e=>e.toLowerCase().startsWith(cityy.toLowerCase())
).map((c,index)=>(
              <p key={index} className='font-light text-md cursor-pointer px-2 hover:bg-gray-100' onClick={handleClck}>{c}</p>
            ))}
        </div> }
        </div>
        </div>

        <button className='block w-full bg-orange-400 text-white py-2 visible md:hidden'>Chercher</button>


    </div>
  )
}

export default Search