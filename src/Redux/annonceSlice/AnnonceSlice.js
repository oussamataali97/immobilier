import { createSlice } from '@reduxjs/toolkit'


const initialState={
    annonce:[],
    userAnnonces:[],
    AnnonceCateg:[],
    isLoading:true,
    searchQuery:JSON.parse(window.localStorage.getItem('searchDat')) || null,
}




 const AnnonceSlice = createSlice({
    initialState,
    name:'annonce',
    reducers:{
      getAnnonces:(state,action)=>{
        state.annonce=action.payload
      },
      getUserAnnonces:(state,action)=>{
        state.userAnnonces=action.payload
        state.isLoading=false
      },
      getUserAnnoncesCatego:(state,action)=>{
        state.AnnonceCateg=action.payload
        state.isLoading=false
      },
      searchAnnonce:(state,action)=>{
        state.searchQuery=action.payload
      }

    }

})

export const {getAnnonces,searchAnnonce,getUserAnnoncesCatego,getUserAnnonces}=AnnonceSlice.actions
export const AnonceSliceRe = AnnonceSlice.reducer