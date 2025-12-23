import { PropsWithChildren } from "react";

export default function CardText({ children }: PropsWithChildren) {
  return (
    <p className="text-sm text-foreground/60">{children}</p>
  )
}