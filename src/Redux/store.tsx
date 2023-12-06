import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import coberturaReducer from "./features/coberturaSlice"

export const makeStore = () => {
    return configureStore({
      reducer: {
        cobertura: coberturaReducer
      }
    })
  }

export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// export const store = configureStore({ // export default configureStore({
//     reducer: {
//        cobertura: coberturaReducer
//     }
// })
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// const rootReducer = combineReducers({
//      cobertura: coberturaReducer,
  
//   })

// export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
//   return configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
//     preloadedState
//   })
// }
// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']