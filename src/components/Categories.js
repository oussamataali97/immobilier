import React from 'react'
import pic1 from './../assets/43.png'
import pic2 from './../assets/44.png'
import pic3 from './../assets/45.png'

import pic4 from './../assets/46.png'

import pic5 from './../assets/47.png'
import { Link } from 'react-router-dom'

import pic6 from './../assets/97.png'
import { useParams } from 'react-router-dom'



const Categories = () => {

  const cat=[{
    image:pic1,
    title:"Apartement"
  },
  {
    image:pic2,
    title:"Houses & Villa"
  },
  {
    image:pic3,
    title:"Store & Commerce"
  },
  {
    image:pic4,
    title:"Desk & Tray"
  },
  {
    image:pic5,
    title:"Land & Farmes"
  },
  {
    image:pic6,
    title:"Others"
  },]





  return (
    <div className='max-w-5xl mx-auto pt-6'>
      <p className='text-center font-normal text-xl md:text-2xl'>Find your property in Morocco</p>
      <div className="flex flex-wrap justify-center text-center gap-6 py-0 md:py-6">
        {cat.map(elemnt=>(
  <Link to={`/morocco/${elemnt.title}`}><div className="flex boxsw flex-col items-center hover:shadow-2xl hover:bg-gray-100 rounded-md text-sm w-[100px] py-6  ">
  <img src={elemnt.image} alt="" className='w-8' />
  <p className="mt-3 font-semibold  "> {elemnt.title} </p>
</div></Link>
        ))}


      </div>
    </div>
  )
}

export default Categories