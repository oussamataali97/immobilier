import React from 'react'
import pic1 from './../assets/43.png'
import pic2 from './../assets/44.png'
import pic3 from './../assets/45.png'

import pic4 from './../assets/46.png'

import pic5 from './../assets/47.png'


import pic6 from './../assets/97.png'



const Categories = () => {



  return (
    <div className='max-w-5xl mx-auto pt-6'>
      <p className='text-center font-normal text-xl md:text-2xl'>Trouvez votre bien immobilier au Maroc</p>
      <div className="flex flex-wrap justify-center text-center gap-6 py-0 md:py-6">
        <div className="flex boxsw flex-col items-center hover:shadow-2xl hover:bg-gray-100 rounded-md text-sm w-[100px] py-6  ">
          <img src={pic1} alt="" className='w-8' />
          <p className="mt-3 font-semibold  ">Appartement</p>
        </div>
        <div className="flex boxsw flex-col items-center hover:shadow-2xl hover:bg-gray-100 rounded-md text-sm w-[100px] py-6 ">
          <img src={pic2} alt="" className='w-8' />
          <p className="mt-3 font-semibold ">Maison & villa</p>
        </div>
        <div className="flex boxsw flex-col items-center hover:shadow-2xl hover:bg-gray-100 rounded-md text-sm w-[100px] py-6 ">
          <img src={pic3} alt="" className='w-8' />
          <p className="mt-3 font-semibold ">Magasin & commerce</p>
        </div>
        <div className="flex boxsw flex-col items-center hover:shadow-2xl hover:bg-gray-100 rounded-md text-sm w-[100px] py-6 ">
          <img src={pic4} alt="" className='w-8' />
          <p className="mt-3 font-semibold ">Bureau & plateau</p>
        </div>
        <div className="flex boxsw flex-col items-center hover:shadow-2xl hover:bg-gray-100 rounded-md text-sm w-[100px] py-6 ">
          <img src={pic5} alt="" className='w-8 ' />
          <p className="mt-3 font-semibold ">Terrain & fermes</p>
        </div>
        <div className="flex boxsw flex-col items-center hover:shadow-2xl hover:bg-gray-100 rounded-md text-sm w-[100px] py-6 ">
          <img src={pic6} alt="" className='w-8' />
          <p className="mt-3 font-semibold ">Autres</p>
        </div>

      </div>
    </div>
  )
}

export default Categories