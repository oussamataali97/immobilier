import React from 'react'
import {Search,Categories,LastOfffers,MeilleurOffres,JoinUs} from ".";
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useState } from 'react';
const Layout = () => {
  const city =['Errissani','Tadighoust','Goulmim','Tileft','Tanger','Errachidia','Casa','Goulmima','Méknes','Tetouan','Mohamedia','Asfi','Tinghir','Fes','Marakech','Dakhla','Laayoun','... et 60 autres ville, entrez votre nom ville pour affiner les résultats']
  const [toggle,setToggle]=useState(false)
  const [acctive,setAcctive]=useState(false)
  const [cityy,setCity]=useState('')
  const [querye,setQuery]=useState('')



  const [categoryChosen,setCategoryChosen]=useState('')



  return (
    <div>
<Search setToggle={setToggle} city={city} toggle={toggle} acctive={acctive} cityy={cityy} querye={querye}
 setAcctive={setAcctive} categoryChosen={categoryChosen} setCategoryChosen={setCategoryChosen} setCity={setCity} setQuery={setQuery}/>
 <Categories/>
 <MeilleurOffres/>
 <LastOfffers/>
 <JoinUs/>

    </div>
  )
}

export default Layout