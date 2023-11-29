import { serverTimestamp } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


const UpdateAnnonce = () => {
    const annonce=useSelector(state=>state.annonce.annonce)
    const {id}=useParams()
    console.log(id)
    const [perc,setPerc]=useState(null)
    const navigate=useNavigate()


    const [oldData,setOldData]=useState([])
    const [selectedOption, setSelectedOption]=useState('');

    console.log(oldData)

    console.log(selectedOption)

    useEffect(()=>{
       annonce?.filter(an=>an?.id == id).map(el=>{
            setOldData(el)
            setSelectedOption(el.category)
        })


    },[])
    const [file,setFile]=useState('')
    const [enable,setEnable]=useState(false)
    const handleChange=(e)=>{
        setOldData({...oldData,[e.target.name]:e.target.value})
    }


    const handleSubmit =async(e)=>{
        e.preventDefault()
        await setDoc(doc(db, "annonces", id), {
          ...oldData,
          isPremium:enable,
          category:selectedOption,
          updatedAt:serverTimestamp()
          });
          toast.success("Annonce Updated successfully ");
          navigate('/annonces')
    }

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
                setOldData((prev)=>({...prev,photoURL:downloadURL}))
              });
            }
          );

        }
        file && uploadFile()

      },[file])

      const handleBack =()=>{
        navigate(-1)

      }



  return (

    <div className='max-w-3xl mx-auto p-5'>
    <p className='text-center font-bold text-gray-400'>Update Ad </p>

<form onSubmit={handleSubmit}>

<div className="flex gap-x-3 items-center py-4">
<img src={file ? URL.createObjectURL(file) : oldData?.photoURL} alt="picture" className='w-32 h-32 object-cover rounded-lg' />


<div className="input">
<label className="block mb-2 text-sm font-medium text-gray-500 " for="file_input">Upload Picture</label>
<input onChange={handleChangeFile} name='picture' className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
<p className="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

</div>
</div>

<div className="relative z-0 w-full mb-6 group">
  <input type="text" onChange={handleChange} value={oldData?.title} name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
</div>

<div className="relative z-0 w-full mb-6 group">
  <textarea rows="4" onChange={handleChange} value={oldData?.description} name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
</div>

<div className="relative z-0 w-full mb-6 group">
  <input type="number" onChange={handleChange} value={oldData?.chambres} name="chambres" id="chambres" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label for="chambres" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nbr Chambres</label>
</div>

<div className="relative z-0 w-full mb-6 group">
  <input type="text" onChange={handleChange} value={oldData?.adress} name="adress" id="adress" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label for="adress" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse</label>
</div>

<div className="relative z-0 w-full mb-6 group">
  <input type="number" onChange={handleChange} value={oldData?.superficie} name="superficie" id="superficie" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label for="superficie" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Superficie M²</label>
</div>

<div className="relative z-0 w-full mb-6 group">
  <input type="text" onChange={handleChange} value={oldData?.Ville} name="Ville" id="Ville" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label for="Ville" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ville</label>
</div>

<div className="relative z-0 w-full mb-6 group">
  <input type="number" onChange={handleChange} value={oldData?.price} name="price" id="floating_Price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label for="price" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
</div>

<label for="countries" class="block mb-2 text-sm  text-gray-500 dark:text-white">Category</label>
<select value={selectedOption}   onChange={e => setSelectedOption(e.target.value)}
 id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option >Choose a Category</option>
  <option value="Apartement">Apartement</option>
  <option value="Houses & Villa">Houses & Villa</option>
  <option value="Store & Commerce">Store & Commerce</option>
  <option value="Desk & Tray">Desk & Tray</option>
  <option value="Land & Farmes">Land & Farmes</option>
  <option value="Ohters">Ohters</option>
</select>


<div className=" flex items-center mt-4">
<span class=" text-sm font-medium text-gray-900 dark:text-gray-300">Booster L'annonce : </span>

<label class="relative inline-flex items-center cursor-pointer ml-3">
  <input type="checkbox" checked={oldData?.isPremium ? !enable : enable} onClick={()=>setEnable(!enable)} class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>

</div>



<div className="w-full flex justify-between gap-x-2 flex-1">
<button type="submit" className="mt-6 lg:w-full text-white bg-green-600 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>

</div>

</form>
<button onClick={handleBack} className="mt-6 lg:w-full text-white bg-yellow-500 hover:bg-yellow-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>


</div>  )
}

export default UpdateAnnonce