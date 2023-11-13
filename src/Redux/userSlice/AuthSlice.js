
import { createSlice } from '@reduxjs/toolkit'


const initialState={
    user: JSON.parse(window.localStorage.getItem('user')) || null,
    isLoading:false,
    userAuthenticated:[]


}



 const userSlice = createSlice({
    initialState,
    name:'auth',
    reducers:{
      login:(state,action)=>{
        state.userAuthenticated =action.payload
        state.user =action.payload

      },
      logout:(state)=>{
        state.user=null
        window.localStorage.removeItem('user')
      }
      ,createUser:(state)=>{
        state.userAuthenticated =action.payload

      }
    }

})
export const {login,logout,createUser}= userSlice.actions
export const userSlice2 = userSlice.reducer