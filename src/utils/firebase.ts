import ReactGA from 'react-ga4'

export const initializeGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID)
}

export const logEvent = (eventName: string, eventParams: any) => {
  ReactGA.event(eventName, eventParams)
}
