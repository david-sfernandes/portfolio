import { Project } from "@/types/types";
import { ArrowUpRightFromSquareIcon, ArrowUpRightIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import TechNode from "./tech-node";

export default function CardProject({ project }: { project: Project }) {
  return (
    <div className="card-layout card-project">
      <div className="w-full aspect-video">
        <Image className="object-cover size-full" src={project.image_url} width={440} height={640} alt="imagem projeto" />
      </div>
      <h5>{project.name}</h5>
      <p>{project.description}</p>
      <div className="tech-list">
        {project.tech_list.map((tech) => (
          <TechNode>{tech}</TechNode>
        ))}
      </div>
      <div className="flex w-full gap-2.5">
        <button className="visit-btn">Visitar <ArrowUpRightFromSquareIcon className="text-white/80 size-4.5 mt-0.5" /></button>
        <button className="repo-btn"><GithubIcon className="size-6 text-foreground" /></button>
      </div>
    </div>
  )
}