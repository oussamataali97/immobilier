import React from 'react'

const Contact = () => {
  return (
    <div className='mb-16 flex  flex-col gap-3 bg-white  p-6 max-w-xl mx-auto  loginx -mt-[100px] md:-mt-10'>
              <p className='text-center font-bold text-2xl'>Contactez-nous</p>
      <p className='text-center text-light text-gray-500'>Nous vous répondrons dans les 48 heures. Veuillez utiliser nos forums et notre section FAQ avant de nous envoyer un message.</p>
<form action="">
<div className="flex justify-between flex-col md:flex-row gap-2">
    <div className="flex-1 form-group relative flex flex-col py-3">
    <label className='font-bold mb-1 text-sm' htmlFor="nom">Votre Nom</label>
    <input
 type="text" placeholder='votre nom ' className='focus:outline-none px-2 py-2 border border-gray-300' id='nom' name='nom' />
    </div>
    <div className="flex-1 form-group relative flex flex-col py-3">
    <label className='font-bold mb-1 text-sm' htmlFor="email">Email</label>
    <input type="email" placeholder='votre email '

    className='focus:outline-none px-2 py-2 border border-gray-300' id='Password2' name='password2' />
    </div>
    </div>
    <div className="form-group flex flex-col">
    <label className='font-bold mb-1 text-sm' htmlFor="sujet">Votre sujet *</label>
    <input type="text" required placeholder='votre sujet ' className='focus:outline-none px-2 py-2 border border-gray-300' id='sujet' name='sujet' />
    </div>
    <div className="form-group flex flex-col  py-3">
    <label className='font-bold mb-1 text-sm' htmlFor="message">Message *</label>
    <textarea  required placeholder='votre Message ' rows={6} className='focus:outline-none px-2 py-2 border border-gray-300' id='message' name='message' />
    </div>
    <button className={'bg-green-600 mt-8 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold'}>Envoyer le message</button>

</form>
    </div>
  )
}

export default Contact