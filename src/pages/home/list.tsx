import { AnimatePresence } from 'framer-motion'
import { useMemo } from 'react'
import EventCart from '~/components/event-cart'
import { useAppSelector } from '~/store'
import { IEventData, selectEventState } from '~/store/reducers/event-reducer'

const HomeList = () => {
  const { list, filter } = useAppSelector(selectEventState)

  const filteredList = useMemo(() => {
    if (list.length === 0 || !Array.isArray(list)) return []

    if (filter === '') return list

    return list.filter((event) =>
      ['away_team', 'home_team'].some((key) =>
        event[key as keyof IEventData]
          .toLowerCase()
          .includes(filter.toLowerCase()),
      ),
    )
  }, [filter, list])

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {filteredList.map((event) => (
            <EventCart {...event} key={event.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HomeList
