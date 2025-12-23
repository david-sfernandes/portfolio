import { PropsWithChildren } from "react";
import CardText from "./card-text";
import CardTitle from "./card-title";

export default function CardTechList({ className }: { className: string }) {
  const QTY = 15
  return (
    <div className={`card-layout text-center ${className}`}>
      <CardTitle>Técnologias</CardTitle>
      <CardText>
        Conheca algumas das técnologias que eu<br />utilizo em projetos
      </CardText>
      <div className="tech-marquee">
        <div className="tech-marquee-track">
          {Array.from({ length: QTY }).map((_, i) => (
            <Box>{i}</Box>
          ))}
          {Array.from({ length: QTY }).map((_, i) => (
            <Box>{i}</Box>
          ))}
        </div>
      </div>
    </div>
  )
}

function Box({ children }: PropsWithChildren) {
  return (
    <div className="size-16 card-layout">
      {children}
    </div>
  )
}
