  import {Header,Search,Categories,LastOfffers,MeilleurOffres,Layout,JoinUs,Footer} from "./components";
import { Routes,Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from "./pages/Login";
import Create from "./pages/Create";
import { useState } from "react";
import Contact from "./pages/Contact";
import DetailImo from "./pages/DetailImo";
import { useEffect} from 'react'
import { useDispatch } from "react-redux";
import { getImmo } from "./Redux/annonceSlice/AnnonceSlice";
function App() {

    const dispatch=useDispatch()

    useEffect(()=>{
      window.scrollTo(0, 0);
      dispatch(getImmo())
    } ,[])


    AOS.init()
  return (
    <div className="">
 <Header/>
 <Routes>
  <Route path="/" element={ <Layout/>}/>
  <Route path="/*" element={ <Notfound/>}/>
  <Route path="/login" element={ <Login/>}/>
  <Route path="/create" element={ <Create/>}/>
  <Route path="/immo/:id" element={ <DetailImo/>}/>

  <Route path="/contact" element={ <Contact/>}/>



 </Routes>
 <Footer/>
    </div>
  );
}

export default App;
