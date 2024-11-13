import api from '~/utils/api'

class EventService {
  sport: string
  constructor(sport: string) {
    this.sport = sport
  }

  async getAllEvents() {
    const { data } = await api.get(`/${this.sport}/events`)
    return data
  }

  async getOdds(eventId: string) {
    const { data } = await api.get(`/${this.sport}/events/${eventId}/odds`, {
      params: {
        regions: 'eu',
      },
    })
    return data
  }
}

export default EventService
