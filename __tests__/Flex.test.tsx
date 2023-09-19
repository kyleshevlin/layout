import React from 'react'
import { render } from '@testing-library/react'
import { Flex, Stack, Row } from '../src/Flex'

test('Flex', () => {
  const result = render(
    <Flex>
      <div>Hey</div>
    </Flex>
  )

  expect(result.getByText('Hey')).toBeTruthy()
})

test('Stack', () => {
  const result = render(
    <Stack>
      <div>Hey</div>
    </Stack>
  )

  expect(result.getByText('Hey')).toBeTruthy()
})

test('Row', () => {
  const result = render(
    <Row>
      <div>Hey</div>
    </Row>
  )

  expect(result.getByText('Hey')).toBeTruthy()
})
