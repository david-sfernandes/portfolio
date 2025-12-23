import Image from "next/image";
import CardText from "./card-text";
import CardTitle from "./card-title";

export default function CardBackend({ className }: { className: string }) {
  return (
    <div className={`card-layout ${className}`}>
      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <CardTitle>Backend</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id consequat enim, eu tincidunt dui maecenas.
          </CardText>
        </div>
        <div className="size-25 shrink-0 overflow-hidden block">
          <Image src={"/server.svg"} width={230} height={230} className="object-cover size-full" alt="server image"/>
        </div>
      </div>
    </div>
  )
}
