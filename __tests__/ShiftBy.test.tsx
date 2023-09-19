import React from 'react'
import { render } from '@testing-library/react'
import { ShiftBy } from '../src/ShiftBy'

test('ShiftBy', () => {
  const result = render(
    <ShiftBy>
      <div>Hey</div>
    </ShiftBy>
  )

  expect(result.getByText('Hey')).toBeTruthy()
})
