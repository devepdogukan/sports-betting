import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import EventService from '~/services/event'
import { RootState } from '~/store'

export interface IEventData {
  away_team: string
  commence_time: string
  home_team: string
  id: string
  sport_key: string
  sport_title: string
}

interface EventState {
  list: IEventData[]
  filter: string
  loading: boolean
  error: null | string
}

const initialState: EventState = {
  list: [],
  filter: '',
  loading: false,
  error: null,
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })

      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Unknown error'
      })
  },
})

export const fetchEvents = createAsyncThunk(
  'event/fetchEvents',
  async (sport: string) => {
    const service = new EventService(sport)

    return service.getAllEvents()
  },
)

export const { setFilter } = eventSlice.actions
export const selectEventState = (state: RootState) => state.event
export default eventSlice.reducer
