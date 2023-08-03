import React  , { useState }from 'react'
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Create = () => {
  const [toggle,setToggle]=useState(false)
  return (
    <div className='mb-16 flex  flex-col gap-3 bg-white  p-6 max-w-lg md:mx-auto md:loginx mx-1 -mt-[100px] md:-mt-10'>
      <p className='text-center font-bold text-2xl'>Créer un nouveau compte</p>
      <p className='text-center text-light'>Créer un compte utilisateur avec toutes les informations sur votre activité à portée de main</p>
      <button className='bg-red-600 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold'> <AiFillGoogleCircle size={30}/> Continuez avec Google</button>

  <form action="" className='mt-4 space-y-2'>
  <div className="form-group flex flex-col">
    <label className='font-bold mb-1 text-sm' htmlFor="nom">Nom *</label>
    <input type="email" required placeholder='Nom complet ' className='focus:outline-none px-2 py-2 border border-gray-300' id='email' name='nom' />
    </div>
    <div className="form-group flex flex-col">
    <label className='font-bold mb-1 text-sm' htmlFor="email">Email *</label>
    <input type="email" required placeholder='votre email ' className='focus:outline-none px-2 py-2 border border-gray-300' id='email' name='email' />
    </div>
    <div className="form-group flex flex-col">
    <label className='font-bold mb-1 text-sm' htmlFor="Telephone">Telephone *</label>
    <input type="email" required placeholder='+2126 XX XX XX XX ' className='focus:outline-none px-2 py-2 border border-gray-300' id='email' name='Telephone' />
    </div>
    <div className="flex justify-between flex-col md:flex-row gap-2">
    <div className="flex-1 form-group relative flex flex-col py-3">
      <p onClick={()=>setToggle(!toggle)}>  {toggle ? <AiFillEye size={25} className='absolute top-[45px] right-3 text-gray-500 cursor-pointer' /> : <AiFillEyeInvisible size={25} className='absolute top-[45px] right-3 text-gray-500 cursor-pointer' onClick={()=>setToggle(!toggle)}/>} </p>
    <label className='font-bold mb-1 text-sm' htmlFor="pass">Mot de passe *</label>
    <input type={toggle ? "text" : "password"} placeholder='votre password ' className='focus:outline-none px-2 py-2 border border-gray-300' id='Password' name='pass' />
    </div>
    <div className="flex-1 form-group relative flex flex-col py-3">
      <p onClick={()=>setToggle(!toggle)}>  {toggle ? <AiFillEye size={25} className='absolute top-[45px] right-3 text-gray-500 cursor-pointer' /> : <AiFillEyeInvisible size={25} className='absolute top-[45px] right-3 text-gray-500 cursor-pointer' onClick={()=>setToggle(!toggle)}/>} </p>
    <label className='font-bold mb-1 text-sm' htmlFor="passagain">Retaper le mot de passe *</label>
    <input type={toggle ? "text" : "password"} placeholder='votre password ' className='focus:outline-none px-2 py-2 border border-gray-300' id='Password' name='passagain' />
    </div>
    </div>
    <button className='bg-green-600 mt-8 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold'>Crée un Compte</button>
  </form>
    <p className='text-center font-bold'>Vous avez déjà un compte ? <Link to='/login' className='text-orange-500'> Connexion</Link></p>
    </div>
  )

}

export default Create