import * as React from "react";
import { useSpacing } from "./SpacingContext";

export interface FlexProps {
  align?: React.CSSProperties["alignItems"];
  children: React.ReactNode;
  direction?: React.CSSProperties["flexDirection"];
  justify?: React.CSSProperties["justifyContent"];
  gap?: React.CSSProperties["gap"];
  wrap?: React.CSSProperties["flexWrap"];
}

export function Flex({
  align: alignItems,
  children,
  direction = "row",
  gap,
  justify: justifyContent,
  wrap: flexWrap,
}: FlexProps) {
  const spacing = useSpacing();

  return (
    <div
      style={{
        alignItems,
        display: "flex",
        flexDirection: direction,
        flexWrap,
        gap: spacing(gap),
        justifyContent,
      }}
    >
      {children}
    </div>
  );
}

export function FlexItem({
  align: alignSelf,
  basis: flexBasis,
  children,
  grow: flexGrow,
  shrink: flexShrink,
}) {
  return (
    <div
      style={{
        alignSelf,
        flexBasis,
        flexGrow,
        flexShrink,
      }}
    >
      {children}
    </div>
  );
}
