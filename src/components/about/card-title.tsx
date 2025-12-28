import { PropsWithChildren } from "react";

export default function CardTitle({ children }: PropsWithChildren) {
  return <h4 className="text-xl text-foreground font-medium">{children}</h4>;
}
