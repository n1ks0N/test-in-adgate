import { configureStore, combineReducers } from '@reduxjs/toolkit'
import newsReducer from './reducers/newsSlice'

const rootReducer = combineReducers({
  newsReducer
})

const store = () => configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']

