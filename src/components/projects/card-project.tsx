import { Project } from "@/types/types";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import TechNode from "./tech-node";

export default function CardProject({ project }: { project: Project }) {
  return (
    <div className="card-layout card-project">
      <div className="w-full aspect-video overflow-hidden rounded-xl">
        <Image
          className="object-cover size-full"
          src={project.image_url}
          width={440}
          height={640}
          alt="imagem projeto"
        />
      </div>
      <h5>{project.name}</h5>
      <p>{project.description}</p>
      <div className="tech-list">
        {project.tech_list.map((tech) => (
          <TechNode key={`${project.id}-${tech.toLowerCase()}`}>
            {tech}
          </TechNode>
        ))}
      </div>
      <div className="flex w-full gap-2.5">
        <button className="visit-btn" title="Visitar">
          Visitar{" "}
          <ArrowUpRightFromSquareIcon className="text-white/80 size-4.5 mt-0.5" />
        </button>
        <button className="repo-btn" title="Repositório GitHub">
          <Image
            src="/github.svg"
            width={24}
            height={24}
            className="size-6"
            alt="github"
          />
        </button>
      </div>
    </div>
  );
}
