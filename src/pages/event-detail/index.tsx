import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SPORT_EVENT_ID } from '~/config/constant'
import { useAppDispatch, useAppSelector } from '~/store'
import {
  fetchEventOdds,
  selectEventDetailState,
} from '~/store/reducers/event-detail-reducer'
import EventDetail from './detail'
import Boundary from '~/components/boundary'

const EventDetailPage = () => {
  const { id: eventId = '' } = useParams()
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector(selectEventDetailState)

  useEffect(() => {
    if (!eventId) return
    dispatch(fetchEventOdds({ sportId: SPORT_EVENT_ID, eventId }))
  }, [eventId])

  return (
    <Boundary error={error} loading={loading}>
      <EventDetail />
    </Boundary>
  )
}

export default EventDetailPage
