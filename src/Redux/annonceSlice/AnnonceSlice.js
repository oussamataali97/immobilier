import { createSlice } from '@reduxjs/toolkit'


const initialState={
    annonce:[],
    userAnnonces:[]
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
      }
    }

})

export const {getAnnonces,getUserAnnonces}=AnnonceSlice.actions
export const AnonceSliceRe = AnnonceSlice.reducer