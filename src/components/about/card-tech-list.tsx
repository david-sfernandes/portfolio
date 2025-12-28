import tech_list from "@/data/tech.json";
import Image from "next/image";
import CardText from "./card-text";
import CardTitle from "./card-title";

export default function CardTechList({ className }: { className: string }) {
  const QTY = 15;
  return (
    <div className={`card-layout text-center ${className}`}>
      <CardTitle>Técnologias</CardTitle>
      <CardText>
        Conheca algumas das técnologias que eu
        <br />
        utilizo em projetos
      </CardText>
      <div className="tech-marquee">
        <div className="tech-marquee-track">
          {tech_list.data.map((item, i) => (
            <Box key={`${i}-tech1`} image={item.image} name={item.name} />
          ))}
          {tech_list.data.map((item, i) => (
            <Box key={`${i}-tech2`} image={item.image} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Box({ name, image }: { name: string; image: string }) {
  return (
    <div className="size-16 card-layout p-2! shadow-inner group relative hover:bg-darker/3!">
      <div className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out -top-7 py-1 px-1.5 bg-black/60 backdrop-blur-md rounded left-1/2 -translate-x-1/2">
        <p className="text-white text-xs font-medium">{name}</p>
      </div>
      <Image
        src={`/tech/${image}`}
        width={256}
        height={256}
        className="h-full w-full flex-1"
        alt=""
      />
    </div>
  );
}
