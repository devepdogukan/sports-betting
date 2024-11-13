import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import EventService from '~/services/event'
import { RootState } from '~/store'
import { IEventData } from './event-reducer'

export type Bookmaker = {
  key: string
  title: string
  markets: Market[]
}

export type Outcome = {
  name: string
  price: number
  description: string
  point: number
}

type Market = {
  key: string
  last_update: string
  outcomes: Outcome[]
}

interface EventState {
  detail: (IEventData & { bookmakers: Bookmaker[] }) | null
  loading: boolean
  error: null | string
}

const initialState: EventState = {
  detail: null,
  loading: false,
  error: null,
}

const eventDetailSlice = createSlice({
  name: 'eventDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventOdds.pending, (state) => {
        state.detail = null
        state.loading = true
        state.error = null
      })
      .addCase(fetchEventOdds.fulfilled, (state, action) => {
        state.loading = false
        state.detail = action.payload
      })

      .addCase(fetchEventOdds.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) ?? 'Unknown error'
      })
  },
})

export const fetchEventOdds = createAsyncThunk(
  'eventDetail/fetchEventOdds',
  async (
    payload: { sportId: string; eventId: string },
    { rejectWithValue },
  ) => {
    try {
      const service = new EventService(payload.sportId)

      return await service.getOdds(payload.eventId)
    } catch (e) {
      return rejectWithValue(
        isAxiosError(e) ? e.response?.data?.message : 'Unknown error',
      )
    }
  },
)

export const selectEventDetailState = (state: RootState) => state.eventDetail
export default eventDetailSlice.reducer
