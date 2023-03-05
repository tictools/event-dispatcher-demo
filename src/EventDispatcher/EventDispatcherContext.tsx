import { createContext } from "react"
import EventDispatcher from "./EventDispatcher"

const eventDispatcher = new EventDispatcher()
export const EventDispatcherContext = createContext(eventDispatcher)

type EventDispatcherContextProviderProps = {
  children: React.ReactNode
}
const EventDispatcherContextProvider = function ({ children }: EventDispatcherContextProviderProps) {
  return (
    <EventDispatcherContext.Provider value={eventDispatcher}>
      {children}
    </EventDispatcherContext.Provider>
  )
}

export default EventDispatcherContextProvider