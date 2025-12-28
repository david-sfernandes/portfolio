import SectionDescription from "../ui/section-description";
import TitleNode from "../ui/title-node";
import CardAboutMe from "./card-about-me";
import CardBackend from "./card-backend";
import CardFrontend from "./card-frontend";
import CardTechList from "./card-tech-list";

export default function About() {
  return (
    <section className="flex flex-col w-full items-center text-center min-h-screen gap-6 px-6 md:px-10" id="about">
      <TitleNode>Sobre Mim</TitleNode>
      <SectionDescription>Aqui estão algumas caracteristicas<br />minhas e ferramentas que uso</SectionDescription>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[1fr_20px_1fr] gap-3.5 text-left">
        <CardAboutMe className="md:row-span-2 md:row-start-1 md:col-span-2 md:col-start-1" />
        <CardBackend className="md:row-start-3" />
        <CardFrontend className="md:row-start-3 md:col-start-2" />
        <CardTechList className="md:row-span-3 md:col-start-3" />
      </div>
    </section>
  )
}