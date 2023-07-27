import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiCategoryAlt} from 'react-icons/bi'
import {MdOutlineLocationOn} from 'react-icons/md'
const Search = () => {
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
        <div className="relative flex items-center ">
        <BiCategoryAlt className='absolute ml-2'/>
        <input type="text" className='border pl-7 p-2 w-full' placeholder='Maison & villa' id='search' name='search'/>
        </div>
        </div>
      <div className="input-group flex-1 flex flex-col">
        <label className='font-bold text-sm' htmlFor="Ville">Choisissez une ville</label>
        <div className="relative flex items-center ">
        <MdOutlineLocationOn className='absolute ml-2'/>
        <input type="text" className='border pl-7 p-2 w-full' placeholder='Tout le Maroc' id='search' name='search'/>
        </div>
        </div>


    </div>
  )
}

export default Search