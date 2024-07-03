import {configureStore} from '@reduxjs/toolkit' // always start with her
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
reducer:todoReducer
})// most of time take object