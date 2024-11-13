import { useAppSelector } from '~/store'
import { selectBasketState } from '~/store/reducers/basket-reducer'
import BasketItem from './item'

const Basket = () => {
  const { items } = useAppSelector(selectBasketState)

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Basket</h2>
      {items.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item, i) => (
            <BasketItem {...item} key={i} index={i} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Basket
