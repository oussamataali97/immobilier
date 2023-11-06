import React  , { useEffect, useState }from 'react'
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from 'react-icons/ai'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {toast } from 'react-toastify';
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
const Create = () => {
  const [toggle,setToggle]=useState(false)
  const [data,setData]=useState()
  const [error,setError]=useState('')
  const user=useSelector(state=>state.auth.user)

  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[])

const navigate=useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {

      const user = userCredential.user;

        navigate('/login')
        toast.success("Sign-up success");



    })
    .catch((error) => {
      setError(error.message)
      toast.error("Sign-up failed ");


    });


  }



  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const provider = new GoogleAuthProvider();


  const handleLoginWithGoogle =()=>{

    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      toast.success("Registration success");
      navigate('/login')
      // ...
    }).catch((error) => {
      // Handle Errors here.
    setError(error.message)

      // ...
    });
  }










  return (
    <div className='mb-16 flex  flex-col gap-3 bg-white  p-6 max-w-lg mx-auto  loginx -mt-[100px] md:-mt-10'>
      <p className='text-center font-bold text-2xl'>Créer un nouveau compte</p>
      <p className='text-center text-light'>Créer un compte utilisateur avec toutes les informations sur votre activité à portée de main</p>
      <button className='bg-red-600 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold' onClick={handleLoginWithGoogle}> <AiFillGoogleCircle size={30}/> Continuez avec Google</button>
      {error && <p className='mt-3 rounded-md bg-red-300 block py-3 w-full text-white font-bold text-center'>{error} </p>  }

  <form action="" className='mt-2 space-y-2' onSubmit={handleSubmit}>


    <div className="form-group flex flex-col">
    <label className='font-bold mb-1 text-sm' htmlFor="email">Email *</label>
    <input onChange={handleChange} type="text" required placeholder='votre email ' className='focus:outline-none px-2 py-2 border border-gray-300' id='email' name='email' />
    </div>

    <div className="flex justify-between flex-col md:flex-row gap-2">
    <div className="flex-1 form-group relative flex flex-col py-3">
      <p onClick={()=>setToggle(!toggle)}>  {toggle ? <AiFillEye size={25} className='absolute top-[45px] right-3 text-gray-500 cursor-pointer' /> : <AiFillEyeInvisible size={25} className='absolute top-[45px] right-3 text-gray-500 cursor-pointer' onClick={()=>setToggle(!toggle)}/>} </p>
    <label className='font-bold mb-1 text-sm' htmlFor="pass">Mot de passe *</label>
    <input     style={ error ? { border:'1px solid red'} : {}}
 onChange={handleChange}  type={toggle ? "text" : "password"} placeholder='votre password ' className='focus:outline-none px-2 py-2 border border-gray-300' id='Password' name='password' />
    </div>

    </div>

    <button className='bg-green-600 mt-8 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold'>Crée un Compte</button>

  </form>
    <p className='text-center font-bold'>Vous avez déjà un compte ? <Link to='/login' className='text-orange-500'> Connexion</Link></p>
    </div>
  )

}

export default Create