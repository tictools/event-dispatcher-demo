import { useState } from 'react'
import http from '../../services/http'
import styles from './UserForm.module.css'

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

export default function UserForm () {
  const [formState, setFormState] = useState<UserFormState>(INITIAL_FORM_STATE)

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
    console.log('🚀 :: insert request dispatched')
    http.insertData({ url: 'https://reqres.in/api/users', payload: formState })
      .then(() => console.log('🚀 :: insert response received'))
      .catch(error => console.log({ error }))
  }

  const isSubmitDisabled = () => !formState.first_name || !formState.last_name || !formState.email

  return (
    <div className={styles.form__container}>
      <form className={styles.form__wrapper}>
        <label>
          First name
          <input type='text' name='first_name' value={formState.first_name} onChange={handleOnChange} />
        </label>
        <label>
          Last name
          <input type='text' name='last_name' value={formState.last_name} onChange={handleOnChange} />
        </label>
        <label>
          @email
          <input type='text' name='email' value={formState.email} onChange={handleOnChange} />
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
