import { PropsWithChildren } from "react";
import MDText from "../MDText";

export default function CardText({ children }: PropsWithChildren) {
  return (
    <MDText className="text-sm text-foreground/60">{children as string}</MDText>
  );
}
