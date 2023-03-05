import { useContext } from "react"
import { EventDispatcherContext } from "../EventDispatcher"

export default function useEventDispatcherContext() {
  return useContext(EventDispatcherContext)
}