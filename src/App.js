  import {Header,Search,Categories,LastOfffers,MeilleurOffres,Layout,JoinUs,Footer} from "./components";
import { Routes,Route, useNavigate } from "react-router-dom";

import Notfound from "./pages/Notfound";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from "./pages/Login";
import Create from "./pages/Create";
import Contact from "./pages/Contact";
import DetailImo from "./pages/DetailImo";
import { useEffect} from 'react'
import { useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from "./utilities/PrivateRoutes";
import { useSelector } from 'react-redux'
import AddAnnonces from "./pages/AddAnnonces";
import AnnoncesPage from "./pages/AnnoncesPage";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { getAnnonces } from "./Redux/annonceSlice/AnnonceSlice";
function App() {

    const user=useSelector(state=>state.auth.user)
const dispatch=useDispatch()
const navigate=useNavigate()
    useEffect(()=>{
      window.scrollTo(0, 0);
      const fetchdata= async()=>{
        let list=[]
        const querySnapshot = await getDocs(collection(db, "annonces"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
            console.log(doc.id,'id document')
          list.push({id:doc.id,...doc.data()})

        });
        dispatch(getAnnonces(list))

    }

    fetchdata()

    } ,[])

const userr=window.localStorage.getItem('user')

    AOS.init()

    useEffect(()=>{
      if(!userr){
        navigate('/login')
      }
    },[userr])

  return (
    <div className="">
       <ToastContainer />
 <Header/>
 <Routes>
{/*   <Route path="/" element={ <Layout/>}/>
 */}  <Route path="/*" element={ <Notfound/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/add" element={<AddAnnonces/>}/>
  <Route path="/annonces" element={<AnnoncesPage/>}/>

  <Route index element={
        <PrivateRoutes>
        <Layout/>
      </PrivateRoutes>
  }>

  </Route>
  <Route path="/create" element={ <Create/>}/>
  <Route path="/immo/:id" element={ <DetailImo/>}/>

  <Route path="/contact" element={ <Contact/>}/>



 </Routes>
 <Footer/>
    </div>
  );
}

export default App;
