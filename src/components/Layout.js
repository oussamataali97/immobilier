import React from 'react'
import {Search,Categories,LastOfffers,MeilleurOffres,JoinUs} from ".";
import { useDispatch,useSelector } from 'react-redux'
import { getImmo } from '../Redux/annonceSlice/AnnonceSlice'
import { useEffect } from 'react';
const Layout = () => {


  return (
    <div>
<Search />
 <Categories/>
 <MeilleurOffres/>
 <LastOfffers/>
 <JoinUs/>
    </div>
  )
}

export default Layout