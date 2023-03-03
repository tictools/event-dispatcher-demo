import { render } from '@testing-library/react'
import App from '../App'

vi.mock('../hooks/useFetchRequest', () => ({
  useFetchRequest: vi.fn().mockReturnValue('foo')
}))

describe('App', () => {
  describe('App', () => {

    test('given component App', () => {
      const app = render(<App />)
      console.log(app.debug())
    })
  })
})
