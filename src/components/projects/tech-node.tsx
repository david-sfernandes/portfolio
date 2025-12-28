import { PropsWithChildren } from "react";

export default function TechNode({ children }: PropsWithChildren) {
  return <p className="tech-node">{children}</p>;
}
