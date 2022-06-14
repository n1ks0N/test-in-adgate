import { configureStore, combineReducers } from '@reduxjs/toolkit'
import newsReducer from './reducers/newsSlice'
import userReducer from './reducers/userSlice'

const rootReducer = combineReducers({
  newsReducer, 
  userReducer
})

export const setupStore = () => {
  return configureStore({
      reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

