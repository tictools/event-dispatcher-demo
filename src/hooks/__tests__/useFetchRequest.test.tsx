import { renderHook } from "@testing-library/react"
import { UsersApiResponse } from "../../types"
import useFetchRequest from "../useFetchRequest"

// TODO: check mock fetch implementation: https://runthatline.com/how-to-mock-fetch-api-with-vitest/
describe('useFetchRequest', () => {
  test('test', async () => {
    const spyOnFecth = vi.spyOn(globalThis, 'fetch')

    const response = renderHook(() => useFetchRequest<UsersApiResponse>('https://reqres.in/api/users?per_page=5'))

    expect(spyOnFecth).toHaveBeenCalledOnce()
    expect(response.result.current).toEqual({
      state: 'loading',
      data: null,
      error: null
    })
  })
})

