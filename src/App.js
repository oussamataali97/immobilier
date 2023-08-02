  import {Header,Search,Categories,LastOfffers,MeilleurOffres,Layout,JoinUs,Footer} from "./components";
import { Routes,Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from "./pages/Login";
import Create from "./pages/Create";
import { useState } from "react";
  function App() {

    useState(()=>{
      window.scrollTo(0, 0);
    },[])
    AOS.init()
  return (
    <div className="">
 <Header/>
 <Routes>
  <Route path="/" element={ <Layout/>}/>
  <Route path="/*" element={ <Notfound/>}/>
  <Route path="/login" element={ <Login/>}/>
  <Route path="/create" element={ <Create/>}/>



 </Routes>
 <Footer/>
    </div>
  );
}

export default App;
