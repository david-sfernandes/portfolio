import projects from "../../../projects.json";
import SectionDescription from "../ui/section-description";
import TitleNode from "../ui/title-node";
import CardProject from "./card-project";

export default function Projects() {
  return (
    <section className="flex flex-col w-full items-center text-center min-h-screen gap-6 px-6 md:px-10">
      <TitleNode>Projetos</TitleNode>
      <SectionDescription>
        Conheça alguns dos projetos
        <br />
        pessoais e empresariais que eu criei
      </SectionDescription>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3.5">
        {projects.data.map((project) => (
          <CardProject project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
