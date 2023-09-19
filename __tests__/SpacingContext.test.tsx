import React from 'react'
import { render, renderHook } from '@testing-library/react'
import {
  SpacingProvider,
  SpacingValue,
  useSpacing,
} from '../src/SpacingContext'

test('SpacingContext', () => {
  const result = render(
    <SpacingProvider spacing={() => 0}>
      <div>Hey</div>
    </SpacingProvider>
  )

  expect(result.getByText('Hey')).toBeTruthy()
})

function createWrapper(Wrapper: any, props: any) {
  return function CreatedWrapper({ children }: any) {
    return <Wrapper {...props}>{children}</Wrapper>
  }
}

describe('useSpacing', () => {
  it('should use the identity function by default', () => {
    const { result } = renderHook(() => useSpacing())

    expect(result.current('Test')).toEqual('Test')
  })

  it('should use the spacing function provided', () => {
    const { result } = renderHook(() => useSpacing(), {
      wrapper: createWrapper(SpacingProvider, {
        spacing: (x: SpacingValue) => (typeof x === 'number' ? x * 8 : x),
      }),
    })

    expect(result.current('Test')).toEqual('Test')
    expect(result.current(1)).toEqual(8)
    expect(result.current(undefined)).toEqual(undefined)
  })
})
