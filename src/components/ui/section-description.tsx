import { PropsWithChildren } from "react";
import MDText from "../MDText";

export default function SectionDescription({ children }: PropsWithChildren) {
  return <MDText className="text-lg md:text-2xl font-semibold">{children as string}</MDText>;
}
