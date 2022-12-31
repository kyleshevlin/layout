# `@kyleshevlin/layout`

Just some basic layout components I use over & over.

- `Flex` & `FlexItem`
- `Margin`
- `ShiftBy`

It also exports a `SpacingProvider` and uses a `useSpacing` hook under the hood. This allows you to modify gaps and margins with a function. For example.

```tsx
// If the `value` is a number, treat it as a factor and multiply by 8(px)
const spacing = (value: string | number) => {
  return typeof value === 'number' ? value * 8 : value
}

function App() {
  return (
    <SpacingProvider spacing={spacing}>
      {/* gap={2} will create 16px of spacing between items */}
      <Flex direction="column" gap={2}>
        <h3>Hello!</h3>
        <p>World</p>
      </Flex>
    </SpacingProvider>
  )
}
```
