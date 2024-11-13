import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './reducers/event-reducer'
import eventDetailReducer from './reducers/event-detail-reducer'
import basketReducer from './reducers/basket-reducer'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    event: eventReducer,
    eventDetail: eventDetailReducer,
    basket: basketReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
