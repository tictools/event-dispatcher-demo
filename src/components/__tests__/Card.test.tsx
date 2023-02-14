// import '@testing-library/jest-dom'
import { render, RenderResult } from "@testing-library/react"
import Card from '../Card'

describe('Card', () => {
  describe('given a Card', () => {
    let card: RenderResult

    beforeEach(() => {
      card = render(<Card header='foo'>
        <p>1st child</p>
        <p>2nd child</p>
      </Card>)
    })

    test('when component is rendered then header should contain expected content', () => {
      const tagNameElement = card.getByText('foo').tagName
      expect(tagNameElement.toLowerCase()).toEqual('h2')
      expect(card.getByText('foo'))
    })

    test('when component is rendered then children should contain expected content', () => {
      const childElements = card.container.getElementsByTagName('p')
      const [child_1, child_2] = childElements

      expect(child_1.innerHTML).toEqual('1st child')
      expect(child_2.innerHTML).toEqual('2nd child')
      expect(childElements.length).toEqual(2)
    })

  })
})