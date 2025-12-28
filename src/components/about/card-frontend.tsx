import Image from "next/image";
import CardText from "./card-text";
import CardTitle from "./card-title";

export default function CardFrontend({ className }: { className: string }) {
  return (
    <div className={`card-layout ${className}`}>
      <div className="card-stack-content">
        <div className="flex-1">
          <CardTitle>Front-End</CardTitle>
          <CardText>
            Desenvolvo interfaces modernas e responsivas, sempre priorizando usabilidade, desempenho e qualidade visual.
          </CardText>
        </div>
        <div className="size-25 shrink-0 overflow-hidden block">
          <Image src={"/server.svg"} width={230} height={230} className="object-cover size-full" alt="server image" />
        </div>
      </div>
    </div>
  )
}
