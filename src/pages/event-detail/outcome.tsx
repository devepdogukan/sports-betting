import { Outcome } from '~/store/reducers/event-detail-reducer'

type OutcomeItemProps = Outcome & {
  onAddToBasket: () => void
}

const OutcomeItem = ({
  description,
  name,
  price,
  onAddToBasket,
}: OutcomeItemProps) => {
  return (
    <div
      key={`${description}-${name}`}
      className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md border border-gray-300"
    >
      <div>
        <p className="text-sm text-gray-700 font-semibold">{name}</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-sm font-semibold text-blue-600">
          {price > 0 ? `+${price}` : price}
        </p>
        <button
          onClick={() => onAddToBasket()}
          className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default OutcomeItem
