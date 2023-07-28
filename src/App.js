  import {Header,Search,Categories,LastOfffers,MeilleurOffres,Layout,JoinUs,Footer} from "./components";
import { Routes,Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import AOS from 'aos';
import 'aos/dist/aos.css';
  function App() {
    AOS.init()
  return (
    <div className="">
 <Header/>
 <Routes>
  <Route path="/" element={ <Layout/>}/>
  <Route path="/*" element={ <Notfound/>}/>

 </Routes>
 <Footer/>
    </div>
  );
}

export default App;
