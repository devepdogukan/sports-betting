import HomePage from '~/pages/home'
import EventDetailPage from '~/pages/event-detail'

const router = [
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: '/event/:id',
    element: <EventDetailPage />,
  },
]

export default router
