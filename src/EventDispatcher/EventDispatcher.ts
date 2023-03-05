import { Dispatcher } from "./dispatcher.types"

export default class EventDispatcher implements Dispatcher {
  private eventListeners: any = {}

  dispatch(type: any, payload: any) {
    const eventListener = this.eventListeners[type]
    eventListener?.forEach((listener: any) => listener(payload))
  }

  subscribe(type: any, listener: any) {
    const eventListener = this.eventListeners[type]
    this.eventListeners = {
      ...this.eventListeners,
      [type]: !eventListener ? [listener] : [...this.eventListeners[type], listener]
    }

    return () => {
      this.eventListeners = this.eventListeners[type].filter((eventListener: any) => eventListener !== listener)
    }
  }
}