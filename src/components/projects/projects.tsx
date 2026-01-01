import { PropsWithDictionary } from "@/types/types";
import projects from "@/data/projects.json";
import SectionDescription from "../ui/section-description";
import TitleNode from "../ui/title-node";
import CardProject from "./card-project";

export default function Projects({
  dictionary,
  selectedLanguage,
}: PropsWithDictionary & { selectedLanguage: string }) {
  return (
    <section
      className="flex flex-col w-full items-center text-center min-h-screen gap-6 px-6 md:px-10"
      id="projects"
    >
      <TitleNode>{dictionary.projects.title}</TitleNode>
      <SectionDescription>{dictionary.projects.subtitle}</SectionDescription>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3.5">
        {projects.data.map((project, index) => (
          <CardProject
            project={project}
            key={project.id}
            selectedLanguage={selectedLanguage}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
