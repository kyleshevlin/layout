import * as React from "react";
import { useSpacing } from "./SpacingContext";

export interface FlexProps {
  align?: React.CSSProperties["alignItems"];
  children: React.ReactNode;
  direction?: React.CSSProperties["flexDirection"];
  gap?: React.CSSProperties["gap"];
  justify?: React.CSSProperties["justifyContent"];
  style?: React.CSSProperties;
  wrap?: React.CSSProperties["flexWrap"];
}

export function Flex({
  align: alignItems,
  children,
  direction = "row",
  gap,
  justify: justifyContent,
  style = {},
  wrap: flexWrap,
}: FlexProps) {
  const spacing = useSpacing();

  return (
    <div
      style={{
        ...style,
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

export interface FlexItemProps {
  align?: React.CSSProperties["alignSelf"];
  basis?: React.CSSProperties["flexBasis"];
  children: React.ReactNode;
  grow?: React.CSSProperties["flexGrow"];
  shrink?: React.CSSProperties["flexShrink"];
  style?: React.CSSProperties;
}

export function FlexItem({
  align: alignSelf,
  basis: flexBasis,
  children,
  grow: flexGrow,
  shrink: flexShrink,
  style = {},
}: FlexItemProps) {
  return (
    <div
      style={{
        ...style,
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
