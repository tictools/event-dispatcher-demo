import { useContext } from "react"
import { EventDispatcherContext } from "../EventDispatcher"

export const useEventDispatcherContext = () => {
  return useContext(EventDispatcherContext)
}