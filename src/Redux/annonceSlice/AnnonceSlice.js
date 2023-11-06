import { createSlice } from '@reduxjs/toolkit'


const initialState={
    annonce:[],
    selectedAnnonce:[]
}




 const AnnonceSlice = createSlice({
    initialState,
    name:'annonce',
    reducers:{
      getAnnonces:(state,action)=>{
        state.annonce=action.payload
      }
    }

})

export const {getAnnonces}=AnnonceSlice.actions
export const AnonceSliceRe = AnnonceSlice.reducer