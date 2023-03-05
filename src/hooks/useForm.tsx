import { useState } from "react"
import { USER_EVENTS } from "../EventDispatcher/actions"
import http from "../services/http"
import useEventDispatcherContext from "./useEventDispatcherContext"

interface UserFormState {
  first_name: string
  last_name: string
  email: string
}

const INITIAL_FORM_STATE = {
  first_name: '',
  last_name: '',
  email: ''
}

export default function useForm() {
  const eventDispatcher = useEventDispatcherContext()
  const [formState, setFormState] = useState<UserFormState>(INITIAL_FORM_STATE)
  const isSubmitDisabled = () => !formState.first_name || !formState.last_name || !formState.email

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const handleReset = () => {
    setFormState(prevState => ({
      ...prevState,
      ...INITIAL_FORM_STATE
    }))
  }

  const handleSubmit = () => {
    eventDispatcher.dispatch(USER_EVENTS.CREATE_USER_FETCH, formState)
    http.insertData({ url: 'https://reqres.in/api/users', payload: formState })
      .then((response) => {
        eventDispatcher.dispatch(USER_EVENTS.CREATE_USER_SUCCESS, response)
        handleReset()
      })
      .catch(error => console.log({ error }))
  }

  return {
    handleOnChange,
    handleReset,
    handleSubmit,
    formState,
    isSubmitDisabled,
  }
}