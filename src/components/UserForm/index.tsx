import { useState } from "react"
import styles from './UserForm.module.css'

type UserFormState = {
  name: string,
  email: string
}

const INITIAL_FORM_STATE = {
  name: '',
  email: ''
}

export default function UserForm() {
  const [formState, setFormState] = useState<UserFormState>(INITIAL_FORM_STATE)

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({
      ...prevState,
      name: event.target.value
    }))
  }

  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({
      ...prevState,
      email: event.target.value
    }))
  }

  const handleReset = () => {
    setFormState(prevState => ({
      ...prevState,
      ...INITIAL_FORM_STATE
    }))
  }

  const handleSubmit = () => {
    console.log('🚀 :: ', formState)
  }

  const isSubmitDisabled = () => !formState.name || !formState.email

  return (
    <div className={styles['form__container']}>
      <form className={styles['form__wrapper']}>
        <label>
          Name
          <input type='text' value={formState.name} onChange={handleOnChangeName} />
        </label>
        <label>
          @email
          <input type='text' value={formState.email} onChange={handleOnChangeEmail} />
        </label>
      </form>
      <div className={styles['button-set__wrapper']}>
        <button
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          disabled={isSubmitDisabled()}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}