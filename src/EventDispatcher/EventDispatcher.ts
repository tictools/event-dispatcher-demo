import { UserEventsMapper, UserEventTypes } from "./actions/user"
import { Dispatcher } from "./types"

type Listener<GenericEventType extends UserEventTypes> = (
  payload: UserEventsMapper[GenericEventType]
) => void

type ListenersMapper = {
  [GenericEventType in UserEventTypes]?: Listener<GenericEventType>[]
}

export default class EventDispatcher implements Dispatcher {
  private eventListeners: ListenersMapper = {}

  dispatch<GenericEventType extends UserEventTypes>(
    type: GenericEventType,
    payload: UserEventsMapper[GenericEventType]
  ) {
    const eventListener = this.eventListeners[type]
    eventListener?.forEach((listener: any) => listener(payload))
  }

  subscribe<GenericEventType extends UserEventTypes>(
    type: GenericEventType,
    listener: Listener<GenericEventType>
  ) {
    const eventListener = this.eventListeners[type]
    this.eventListeners = {
      ...this.eventListeners,
      [type]: !eventListener ? [listener] : [...this.eventListeners[type] as Listener<GenericEventType>[], listener]
    }

    return () => {
      this.eventListeners = {
        ...this.eventListeners,
        [type]: this.eventListeners[type]?.filter((eventListener: any) => eventListener !== listener)
      }
    }
  }
}