import React from 'react'

const JoinUs = () => {
  return (
    <div className='join md:p-8 p-4  mx-5  md:max-w-5xl md:mx-auto md:mt-8 rounded-lg relative -bottom-24 md:-bottom-16  left-0 right-0'>
      <div className=" flex flex-col md:flex-row justify-between items-center ">


      <div className="text contain">
        <p className='md:text-2xl text-lg font-bold  mb-3'>Vous êtes un professionnel de l'immobilier?</p>
        <p className='md:font-semibold font-normal md:text-md md:max-w-[800px]'>Ne cherchez plus ! Rejoignez notre réseau dès maintenant et bénéficiez de nombreux avantages pour développer votre activité.</p>

      </div>
      <button className=' bg-black font-bold text-white px-5 md:py-4 py-3 rounded-full block w-full md:w-auto mt-3'>Nous rejoindre</button>
    </div>
    </div>
  )
}

export default JoinUs