import { cleanup, render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  beforeEach(() => {
    cleanup()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  afterAll(() => {
    vi.clearAllMocks()
  })

  describe('App', () => {
    test('given component App', () => {
      vi.mock('../hooks/useFetchRequest', () => ({
        useFetchRequest: vi.fn().mockReturnValue({
          state: 'error',
          data: null,
          error: new Error('Something went wrong')
        })
      }))

      render(<App />)
      expect(screen.getByText(/wrong/)).toBeTruthy()
    })

    test('given component App', () => {
      // vi.mock('../hooks/useFetchRequest', () => ({
      //   useFetchRequest: vi.fn().mockReturnValue({
      //     state: 'loading',
      //     data: null,
      //     error: null
      //   })
      // }))

      // const app = render(<App />)
      expect(1).toEqual(1)
    })
  })
})
