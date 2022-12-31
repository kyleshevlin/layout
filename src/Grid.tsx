import * as React from 'react'
import { useSpacing } from './SpacingContext'

export interface GridProps {
  children: React.ReactNode
  gap?: React.CSSProperties['gap']
  style?: React.CSSProperties
  templateAreas?: React.CSSProperties['gridTemplateAreas']
  templateColumns?: React.CSSProperties['gridTemplateColumns']
  templateRows?: React.CSSProperties['gridTemplateRows']
}

export function Grid({
  children,
  gap,
  style = {},
  templateAreas: gridTemplateAreas,
  templateColumns: gridTemplateColumns,
  templateRows: gridTemplateRows,
}) {
  const spacing = useSpacing()

  return (
    <div
      style={{
        ...style,
        display: 'grid',
        gap: spacing(gap),
        gridTemplateAreas,
        gridTemplateColumns,
        gridTemplateRows,
      }}
    >
      {children}
    </div>
  )
}
