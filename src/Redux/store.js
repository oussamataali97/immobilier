import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import { AnonceSliceRe } from './annonceSlice/AnnonceSlice'
import { userSlice2 } from './userSlice/AuthSlice'



const reducers = combineReducers({
    annonce: AnonceSliceRe,
    auth:userSlice2


})

export const store = configureStore(

        {reducer:reducers,
         middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

        },


    )
