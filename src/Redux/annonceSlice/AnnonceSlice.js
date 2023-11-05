import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'


const initialState={
    annonce:[],
    selectedAnnonce:[]
}

export const getImmo = createAsyncThunk('user/getImmo',async()=>{

        const res= await fetch('https://64d90717e947d30a2609d8f1.mockapi.io/immobilier')
        const data= await res.json()
        return data


})

export const getImmoId = createAsyncThunk('user/getImmoId',async(id)=>{
    try {
        const res= await fetch(`https://64d90717e947d30a2609d8f1.mockapi.io/immobilier/${id}`)
        const dataOne= await res.json()
        return dataOne

    } catch (error) {
            console.log(error)
    }
})


 const AnnonceSlice = createSlice({
    initialState,
    name:'annonce',
    extraReducers:(builder) => {

        builder.addCase(getImmo.pending, (state, action) => {
          state.isLoading=true
        })
        builder.addCase(getImmo.rejected, (state, action) => {
            state.isLoading=false
            state.error='no data'
          })

        builder.addCase(getImmo.fulfilled, (state, action) => {
            state.isLoading=false
            state.annonce=action.payload

          })

          builder.addCase(getImmoId.pending, (state, action) => {
            state.isLoading=true
          })

          builder.addCase(getImmoId.fulfilled, (state, action) => {
              state.isLoading=false
              state.selectedAnnonce=action.payload

            })

}})

export const AnonceSliceRe = AnnonceSlice.reducer