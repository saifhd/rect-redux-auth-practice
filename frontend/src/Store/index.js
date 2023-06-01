import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Features/AuthSlice.js'
// import authReducer from './Features/Auth/AuthSlice'

export default configureStore({
  reducer: {
    auth: authReducer
  },
})