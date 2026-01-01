import { PropsWithDictionary } from "@/types/types";
import SectionDescription from "../ui/section-description";
import TitleNode from "../ui/title-node";
import CardAboutMe from "./card-about-me";
import CardStack from "./card-stack";
import CardTechList from "./card-tech-list";

export default function About({ dictionary }: PropsWithDictionary) {
  return (
    <section
      className="flex flex-col w-full items-center text-center min-h-screen gap-6 px-6 md:px-10"
      id="about"
    >
      <TitleNode>{dictionary.about.title}</TitleNode>
      <SectionDescription>{dictionary.about.subtitle}</SectionDescription>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[1fr_20px_1fr] gap-3.5 text-left">
        <CardAboutMe
          className="md:row-span-2 md:row-start-1 sm:col-span-2 md:col-start-1"
          title={dictionary.about.cta}
          content={dictionary.about.description}
        />
        <CardStack
          title={dictionary.skills.backend.title}
          text={dictionary.skills.backend.description}
          className="md:row-start-3"
          img="/server.svg"
          imgDark="/server-white.svg"
        />
        <CardStack
          title={dictionary.skills.frontend.title}
          text={dictionary.skills.frontend.description}
          className="md:row-start-3 md:col-start-2"
          img="/frontend.svg"
          imgDark="/frontend-white.svg"
        />
        <CardTechList
          className="sm:col-span-2 md:col-span-1 md:row-span-3 md:col-start-3"
          title={dictionary.technologies.title}
          description={dictionary.technologies.subtitle}
        />
      </div>
    </section>
  );
}
