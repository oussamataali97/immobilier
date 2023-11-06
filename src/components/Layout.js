import React from 'react'
import {Search,Categories,LastOfffers,MeilleurOffres,JoinUs} from ".";
import { useDispatch,useSelector } from 'react-redux'
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