import React  , { useEffect, useState }from 'react'
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from 'react-icons/ai'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link } from 'react-router-dom'
import { auth } from '../firebase'
const Create = () => {
  const [toggle,setToggle]=useState(false)
  const [data,setData]=useState()
  const [error,setError]=useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });


  }



  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }





  useEffect(()=>{

      if(data?.password2!==data?.password){
        setError('Les mots de passe ne correspondent pas.')
      } else{
        setError('')
      }

  },[data?.password2])


  useEffect(()=>{

     if(data?.password.length < 5){
      setError('Mot de passe: saisissez au moins 5 caractères.')

    }  else{
      setError('')
    }



},[data?.password])






  return (
    <div className='mb-16 flex  flex-col gap-3 bg-white  p-6 max-w-lg mx-auto  loginx -mt-[100px] md:-mt-10'>
      <p className='text-center font-bold text-2xl'>Créer un nouveau compte</p>
      <p className='text-center text-light'>Créer un compte utilisateur avec toutes les informations sur votre activité à portée de main</p>
      <button className='bg-red-600 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold'> <AiFillGoogleCircle size={30}/> Continuez avec Google</button>
      {error && <p className='mt-3 rounded-md bg-red-300 block py-3 w-full text-white font-bold text-center'>{error} </p>  }

  <form action="" className='mt-2 space-y-2' onSubmit={handleSubmit}>


    <div className="form-group flex flex-col">
    <label className='font-bold mb-1 text-sm' htmlFor="email">Email *</label>
    <input onChange={handleChange} type="email" required placeholder='votre email ' className='focus:outline-none px-2 py-2 border border-gray-300' id='email' name='email' />
    </div>

    <div className="flex justify-between flex-col md:flex-row gap-2">
    <div className="flex-1 form-group relative flex flex-col py-3">
      <p onClick={()=>setToggle(!toggle)}>  {toggle ? <AiFillEye size={25} className='absolute top-[45px] right-3 text-gray-500 cursor-pointer' /> : <AiFillEyeInvisible size={25} className='absolute top-[45px] right-3 text-gray-500 cursor-pointer' onClick={()=>setToggle(!toggle)}/>} </p>
    <label className='font-bold mb-1 text-sm' htmlFor="pass">Mot de passe *</label>
    <input     style={ error ? { border:'1px solid red'} : {}}
 onChange={handleChange}  type={toggle ? "text" : "password"} placeholder='votre password ' className='focus:outline-none px-2 py-2 border border-gray-300' id='Password' name='password' />
    </div>

    </div>
    <button disabled={error} className={error ? 'bg-gray-400 mt-8 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold' : 'bg-green-600 mt-8 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold'}>Crée un Compte</button>
  </form>
    <p className='text-center font-bold'>Vous avez déjà un compte ? <Link to='/login' className='text-orange-500'> Connexion</Link></p>
    </div>
  )

}

export default Create