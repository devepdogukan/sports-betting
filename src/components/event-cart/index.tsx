import { IEventData } from '~/store/reducers/event-reducer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const EventCart = ({
  id,
  sport_title,
  home_team,
  away_team,
  commence_time,
}: IEventData) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={`/event/${id}`}
        className="p-4 bg-white block rounded-md border shadow-sm cursor-pointer"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-2">{sport_title}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 font-semibold">{home_team}</span>
          <span className="text-sm text-gray-500">vs</span>
          <span className="text-gray-700 font-semibold">{away_team}</span>
        </div>
        <p className="text-gray-500 text-sm">
          {new Date(commence_time).toLocaleString()}
        </p>
      </Link>
    </motion.div>
  )
}

export default EventCart
