import { useAppDispatch, useAppSelector } from '~/store'
import { selectEventDetailState } from '~/store/reducers/event-detail-reducer'
import OutcomeItem from './outcome'
import { addToBasket } from '~/store/reducers/basket-reducer'
import { logEvent } from '~/utils/firebase'
import { useEffect } from 'react'

const EventDetail = () => {
  const { detail } = useAppSelector(selectEventDetailState)
  const dispatch = useAppDispatch()

  if (!detail) return null

  useEffect(() => {
    logEvent('view_event', {
      page: 'event-detail',
      ...detail,
    })
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          {detail.home_team} vs {detail.away_team}
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(detail.commence_time).toLocaleString()}
        </p>
        <h2 className="text-lg font-medium text-gray-700 mb-4">
          {detail.sport_title}
        </h2>
        <div className="space-y-6">
          {detail.bookmakers.map((bookmaker) => (
            <div
              key={bookmaker.key}
              className="bg-gray-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-md font-semibold text-gray-600 mb-3">
                {bookmaker.title}
              </h3>
              {bookmaker.markets.map((market) => (
                <div key={market.key} className="mb-4">
                  <p className="text-sm font-medium text-gray-500 mb-2">
                    Market: {market.key.replace(/_/g, ' ')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {market.outcomes.map((outcome, i) => (
                      <OutcomeItem
                        onAddToBasket={() => {
                          const eventDetails = {
                            eventId: detail.id,
                            sportKey: detail.sport_key,
                            homeTeam: detail.home_team,
                            awayTeam: detail.away_team,
                            market: market.key,
                            bookmaker: bookmaker.title,
                            outcome,
                          }

                          logEvent('add_to_cart', eventDetails)
                          dispatch(addToBasket(eventDetails))
                        }}
                        {...outcome}
                        key={i}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventDetail
