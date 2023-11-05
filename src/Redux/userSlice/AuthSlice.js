
import { createSlice } from '@reduxjs/toolkit'


const initialState={
    user: JSON.parse(window.localStorage.getItem('user')) ||null,
    isLoading:false,


}





 const userSlice = createSlice({
    initialState,
    name:'auth',
    reducers:{
      login:(state,action)=>{
        state.user =action.payload
      },
      logout:(state)=>{
        state.user=null
        window.localStorage.removeItem('user')
      }
    }

})
export const {login,logout}= userSlice.actions
export const userSlice2 = userSlice.reducer