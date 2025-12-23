import SectionDescription from "../ui/section-description";
import TitleNode from "../ui/title-node";

export default function Projects() {
  return (
    <section className="flex flex-col w-full items-center text-center min-h-screen gap-6">
      <TitleNode>Projetos</TitleNode>
      <SectionDescription>Conheça alguns dos projetos<br />pessoais e empresariais que eu criei</SectionDescription>
    </section>
  )
}