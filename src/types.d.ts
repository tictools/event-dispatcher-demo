export interface UserItem {
  id: number
  avatar: string
  email: string
  first_name: string
  last_name: string
}

export interface UsersApiResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: UserItem[]
}
