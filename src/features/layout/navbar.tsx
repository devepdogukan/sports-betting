import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '~/store'
import { setFilter } from '~/store/reducers/event-reducer'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const filter = useAppSelector((state) => state.event.filter)
  return (
    <nav className="bg-blue-600 p-4 shadow-md text-white">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <p className="text-xl font-semibold hover:text-blue-200 cursor-pointer">
              Home
            </p>
          </Link>
          <input
            type="text"
            placeholder="Search events"
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
            className="border rounded p-2 mr-2 text-blue-600 font-medium"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
