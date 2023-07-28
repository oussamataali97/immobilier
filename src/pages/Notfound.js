import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='center flex-col text-center bg-white pb-16 mb-2 relative -top-8'>

        <p className='text-[170px] font-extrabold  '>4<span className='text-orange-600 underline'>0</span>4</p>
        <p className='text-[30px] font-semibold '>OOPS! Page non trouvée! <br/> <span className='text-[20px] font-normal text-neutral-600'>Either something get wrong or the page doesn't exist anymore.</span> </p>
        <Link to='/' className='bg-green-600  text-white font-bold px-5 py-3 mt-5 rounded-md' > retour à l'accueil</Link>
    </div>
  )
}

export default Notfound