export const USER_EVENTS = {
  CREATE_USER_FETCH: 'CREATE_USER_FETCH',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS'
} as const

export type UserEventTypes = typeof USER_EVENTS.CREATE_USER_FETCH | typeof USER_EVENTS.CREATE_USER_SUCCESS

export interface CreateUserFetch {
  first_name: string
  last_name: string
  email: string
}

export interface CreateUserSuccess {
  id: string
  createdAt: string
}

export interface UserEventsMapper {
  CREATE_USER_FETCH: CreateUserFetch
  CREATE_USER_SUCCESS: CreateUserSuccess
}


export default USER_EVENTS