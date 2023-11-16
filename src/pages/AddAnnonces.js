import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import { storage } from '../firebase';
import { useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddAnnonces = () => {
    const [dataEntry,setDataEntry]=useState([])
    const navigate=useNavigate()
    const [perc,setPerc]=useState(null)
    const [file,setFile]=useState('')
    const id =JSON.parse(window.localStorage.getItem('user'))
    console.log(id.uid)

    const handleChangeFile =(e)=>{
        setFile(e.target.files[0])
      }


  useEffect(()=>{

    const uploadFile=()=>{
      const name=new Date().getTime() + file.name
      console.log(name)
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
            setDataEntry((prev)=>({...prev,photoURL:downloadURL}))
          });
        }
      );

    }
    file && uploadFile()

  },[file])

    const handleSubmit =async(e)=>{
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "annonces"), {
              ...dataEntry,
              isSold: false,
              userId:id.uid,
              isPremium:false,
              createdAt:serverTimestamp()

            });

            toast.success("Annonce Ajoutée avec success ");
            navigate('/annonces')
        } catch (e) {
            console.error("Error adding document: ", e);
          }

    }

    const handleChange=(e)=>{
        setDataEntry({...dataEntry,[e.target.name]:e.target.value})
    }

    console.log(dataEntry)
  return (
    <div className='max-w-3xl mx-auto p-5'>
        <p className='text-center font-bold text-gray-400'>Ajouter Une nouvelle Annonce </p>

<form onSubmit={handleSubmit}>

<div className="flex gap-x-3 items-center py-4">
    <img src={file ? URL.createObjectURL(file) : "https://w7.pngwing.com/pngs/889/287/png-transparent-camera-icon-camera-electronics-rectangle-square-thumbnail.png"} alt="picture" className='w-32 h-32 object-cover rounded-full' />


    <div className="input">
    <label className="block mb-2 text-sm font-medium text-gray-500 " for="file_input">Upload Picture</label>
<input onChange={handleChangeFile} name='picture' className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
<p className="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

    </div>
    </div>

  <div className="relative z-0 w-full mb-6 group">
      <input type="text" onChange={handleChange} name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
  </div>

  <div className="relative z-0 w-full mb-6 group">
      <textarea rows="4" onChange={handleChange} name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
  </div>

  <div className="relative z-0 w-full mb-6 group">
      <input type="number" onChange={handleChange} name="chambres" id="chambres" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="chambres" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nbr Chambres</label>
  </div>

  <div className="relative z-0 w-full mb-6 group">
      <input type="text" onChange={handleChange} name="adress" id="adress" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="adress" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse</label>
  </div>

  <div className="relative z-0 w-full mb-6 group">
      <input type="number" onChange={handleChange} name="superficie" id="superficie" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="superficie" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Superficie M²</label>
  </div>

  <div className="relative z-0 w-full mb-6 group">
      <input type="text" onChange={handleChange} name="Ville" id="Ville" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="Ville" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ville</label>
  </div>

  <div className="relative z-0 w-full mb-6 group">
      <input type="number" onChange={handleChange} name="price" id="floating_Price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="price" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
  </div>





  <button type="submit" className="mt-6 text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
  )
}

export default AddAnnonces