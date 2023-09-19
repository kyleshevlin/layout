import * as React from 'react'

function identity<T>(x: T) {
  return x
}

export type SpacingValue = string | number | undefined
export type SpacingFunction = (value: SpacingValue) => SpacingValue

const SpacingContext = React.createContext<SpacingFunction>(identity)

export interface SpacingProviderProps {
  children: React.ReactNode
  spacing: SpacingFunction
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
