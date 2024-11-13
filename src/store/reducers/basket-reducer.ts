import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '~/store'
import { Outcome } from './event-detail-reducer'

export type BasketItem = {
  eventId: string
  sportKey: string
  homeTeam: string
  awayTeam: string
  market: string
  outcome: Outcome
  description: string
  bookmaker: string
  price: number
  point: number
}

interface IBasketState {
  items: BasketItem[]
}

const initialState: IBasketState = {
  items: [],
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload)
    },
    removeFromBasket: (state, action) => {
      state.items.splice(action.payload, 1)
    },
    clearBasket: (state) => {
      state.items = []
    },
  },
})

export const { addToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions

export const selectBasketState = (state: RootState) => state.basket

export default basketSlice.reducer
