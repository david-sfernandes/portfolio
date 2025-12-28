import { PropsWithChildren } from "react";

export default function SectionDescription({ children }: PropsWithChildren) {
  return (
    <p className="text-lg md:text-2xl font-semibold">
      {children}
    </p>
  )
}