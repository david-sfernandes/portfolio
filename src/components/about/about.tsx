import SectionDescription from "../ui/section-description";
import TitleNode from "../ui/title-node";
import CardAboutMe from "./card-about-me";
import CardBackend from "./card-backend";
import CardTechList from "./card-tech-list";

export default function About() {
  return (
    <section className="flex flex-col w-full items-center text-center min-h-screen gap-6 px-10" id="about">
      <TitleNode>Sobre Mim</TitleNode>
      <SectionDescription>Aqui estão algumas caracteristicas<br />minhas e ferramentas que uso</SectionDescription>
      <div className="grid grid-cols-3 grid-rows-[1fr_50px_1fr] gap-3.5 text-left">
        <CardAboutMe className="row-span-2 row-start-1 col-span-2 col-start-1" />
        <CardBackend className="row-start-3" />
        <CardBackend className="row-start-3 col-start-2" />
        <CardTechList className="row-span-3 col-start-3" />
      </div>
    </section>
  )
}