import * as React from "react";

export interface ShiftByProps {
  children: React.ReactNode;
  x?: number;
  y?: number;
}

export function ShiftBy({ children, x = 0, y = 0 }: ShiftByProps) {
  return (
    <div style={{ transform: `translate(${x}px, ${y}px)` }}>{children}</div>
  );
}
