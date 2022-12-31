import * as React from 'react'

function identity<T>(x: T) {
  return x
}

type SpacingValue = string | number | undefined

const SpacingContext = React.createContext(identity<SpacingValue>)

interface SpacingProviderProps {
  children: React.ReactNode
  spacing: (value: SpacingValue) => SpacingValue
}

export function SpacingProvider({
  children,
  spacing = identity,
}: SpacingProviderProps) {
  return (
    <SpacingContext.Provider value={spacing}>
      {children}
    </SpacingContext.Provider>
  )
}

export const useSpacing = () => React.useContext(SpacingContext)
