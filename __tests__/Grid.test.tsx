import React from 'react'
import { render } from '@testing-library/react'
import { Grid } from '../src/Grid'

test('Grid', () => {
  const result = render(
    <Grid>
      <div>Hey</div>
    </Grid>
  )

  expect(result.getByText('Hey')).toBeTruthy()
})
