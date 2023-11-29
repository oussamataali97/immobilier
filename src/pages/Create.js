import React  , { useEffect, useState }from 'react'
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from 'react-icons/ai'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {toast } from 'react-toastify';
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { useSelector } from 'react-redux';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { storage } from '../firebase';
import { createUser } from '../Redux/userSlice/AuthSlice';
const Create = () => {
  const [toggle,setToggle]=useState(false)
  const [data,setData]=useState()
  const [perc,setPerc]=useState(null)
  const [file,setFile]=useState('')
  const [error,setError]=useState('')
  const user=useSelector(state=>state.auth.user)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[user])

const navigate=useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
   const res=await createUserWithEmailAndPassword(auth, data.email, data.password)

    await setDoc(doc(db,"users", res.user.uid),{
      ...data,
      TimeStamp:serverTimestamp()
    })



  }

  useEffect(()=>{

    const uploadFile=()=>{
      const name=new Date().getTime() + file.name
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPerc(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setData((prev)=>({...prev,photoURL:downloadURL}))
          });
        }
      );

    }
    file && uploadFile()

  },[file])



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

  const handleChangeFile =(e)=>{
    setFile(e.target.files[0])
  }
  console.log(file)









  return (
    <div className='mb-16 flex  flex-col gap-3 bg-white  p-6 max-w-lg mx-auto  loginx -mt-[100px] md:-mt-10'>
      <p className='text-center font-bold text-2xl'>Créer un nouveau compte</p>
      <p className='text-center text-light'>Créer un compte utilisateur avec toutes les informations sur votre activité à portée de main</p>
      <button className='bg-red-600 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold' onClick={handleLoginWithGoogle}> <AiFillGoogleCircle size={30}/> Continuez avec Google</button>
      {error && <p className='mt-3 rounded-md bg-red-300 block py-3 w-full text-white font-bold text-center'>{error} </p>  }

  <form action="" className='mt-2 space-y-2' onSubmit={handleSubmit}>
    <div className="flex gap-x-3 items-center ">
    <img src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="" className='w-32 h-32 object-cover rounded-full' />


    <div className="input">
    <label className="block mb-2 text-sm font-medium text-gray-500 " for="file_input">Upload Picture</label>
<input onChange={handleChangeFile} name='picture' className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
<p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

    </div>
    </div>

    <div className="form-group flex flex-col">
    <label className='font-bold mb-1 text-sm' htmlFor="displayName">displayName *</label>
    <input onChange={handleChange} type="text" required placeholder='votre displayName ' className='focus:outline-none px-2 py-2 border border-gray-300' id='displayName' name='displayName' />
    </div>

    <div className="form-group flex flex-col">
    <label className='font-bold mb-1 text-sm' htmlFor="adress">adress *</label>
    <input onChange={handleChange} type="text" required placeholder='votre adress ' className='focus:outline-none px-2 py-2 border border-gray-300' id='adress' name='adress' />
    </div>
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

    <button disabled={perc !==null && perc<100} className='disabled:bg-gray-400 bg-green-600 mt-8 w-full py-3 rounded-md text-white  flex items-center justify-center gap-2 font-bold'>Crée un Compte</button>

  </form>
    <p className='text-center font-bold'>Vous avez déjà un compte ? <Link to='/login' className='text-orange-500'> Connexion</Link></p>
    </div>
  )

}

export default Create