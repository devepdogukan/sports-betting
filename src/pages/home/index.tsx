import { useEffect } from 'react'
import { SPORT_EVENT_ID } from '~/config/constant'
import { useAppDispatch, useAppSelector } from '~/store'
import { fetchEvents, selectEventState } from '~/store/reducers/event-reducer'
import Boundary from '~/components/boundary'
import HomeList from './list'
const HomePage = () => {
  const { loading, error } = useAppSelector(selectEventState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchEvents(SPORT_EVENT_ID))
  }, [])

  return (
    <Boundary loading={loading} error={error}>
      <HomeList />
    </Boundary>
  )
}

export default HomePage
