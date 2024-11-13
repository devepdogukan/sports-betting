import { useAppDispatch } from '~/store'
import {
  BasketItem as BasketItemType,
  removeFromBasket,
} from '~/store/reducers/basket-reducer'

type BasketItemProps = BasketItemType & {
  index: number
}

const BasketItem = ({
  eventId,
  market,
  outcome,
  homeTeam,
  bookmaker,
  awayTeam,
  index,
}: BasketItemProps) => {
  const dispatch = useAppDispatch()

  return (
    <li
      key={eventId + market}
      className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-md"
    >
      <div className="space-y-1">
        <p className="font-medium text-lg">
          {homeTeam} vs {awayTeam}
        </p>

        <p className="text-sm text-gray-500">Bookmaker: {bookmaker}</p>
        <p className="text-sm text-gray-500">Market: {market}</p>

        <p className="text-sm text-gray-500">
          Outcome: {outcome.name} ({outcome.price})
        </p>
      </div>
      <button
        onClick={() => dispatch(removeFromBasket(index))}
        className="text-red-600 hover:text-red-800"
      >
        Remove
      </button>
    </li>
  )
}

export default BasketItem
