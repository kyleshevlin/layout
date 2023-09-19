import React from 'react'
import { render } from '@testing-library/react'
import { Margin } from '../src/Margin'

test('Margin', () => {
  const result = render(
    <Margin>
      <div>Hey</div>
    </Margin>
  )

  expect(result.getByText('Hey')).toBeTruthy()
})
