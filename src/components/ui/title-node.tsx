import { PropsWithChildren } from "react";

export default function TitleNode({ children }: PropsWithChildren) {
  return <h3 className="title-node card-layout-rounded">{children}</h3>;
}
