import * as React from 'react'
import { useSpacing } from './SpacingContext'

type MarginValue = string | number

export interface MarginProps {
  all?: MarginValue
  bottom?: MarginValue
  children: React.ReactNode
  horizontal?: MarginValue
  inline?: boolean
  left?: MarginValue
  right?: MarginValue
  top?: MarginValue
  vertical?: MarginValue
}

export function Margin({
  all,
  bottom,
  children,
  horizontal,
  inline = false,
  left,
  right,
  top,
  vertical,
}: MarginProps) {
  const spacing = useSpacing()

  const el = inline ? 'span' : 'div'

  const styles = React.useMemo(
    () => ({
      // Without setting the `span` to inline-block, margins won't do anything
      ...(inline && { display: 'inline-block' }),
      ...(all && { margin: spacing(all) }),
      ...(horizontal && {
        marginLeft: spacing(horizontal),
        marginRight: spacing(horizontal),
      }),
      ...(vertical && {
        marginTop: spacing(vertical),
        marginBottom: spacing(vertical),
      }),
      ...(left && { marginLeft: spacing(left) }),
      ...(right && { marginRight: spacing(right) }),
      ...(top && { marginTop: spacing(top) }),
      ...(bottom && { marginBottom: spacing(bottom) }),
    }),
    [all, bottom, horizontal, left, right, top, vertical]
  )

  return React.createElement(el, { style: styles }, children)
}
