import { Project } from "@/types/types";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import { div as Div } from "motion/react-client";
import Image from "next/image";
import TechNode from "./tech-node";

export default function CardProject({
  project,
  selectedLanguage,
  index,
}: {
  project: Project;
  selectedLanguage: string;
  index: number;
}) {
  const LANGUAGE: "pt" | "en" = selectedLanguage === "en-US" ? "en" : "pt";
  const duration = 0.4 + index * 0.1;

  return (
    <Div
      className="card-layout card-project"
      initial={{ opacity: 0, scale: 0.5, y: 0.8 }}
      whileInView={{ opacity: 1, scale: 1, y: 1 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{
        duration: duration,
        scale: { type: "spring", visualDuration: duration, bounce: 0.5 },
      }}
    >
      <div className="w-full aspect-video overflow-hidden rounded-xl">
        <Image
          className="object-cover size-full"
          src={project.image_url}
          width={440}
          height={640}
          alt="imagem projeto"
        />
      </div>
      <h5>{project.name[LANGUAGE]}</h5>
      <p>{project.description[LANGUAGE]}</p>
      <div className="tech-list">
        {project.tech_list.map((tech) => (
          <TechNode key={`${project.id}-${tech.toLowerCase()}`}>
            {tech}
          </TechNode>
        ))}
      </div>
      <div className="flex w-full gap-2.5">
        <a href={project.url} className="visit-btn" title="Visitar">
          Visitar{" "}
          <ArrowUpRightFromSquareIcon className="text-white/80 size-4.5 mt-0.5" />
        </a>
        {project.repository_url && (
          <a
            href={project.repository_url}
            className="repo-btn"
            title="Repositório GitHub"
          >
            <Image
              src="/github.svg"
              width={24}
              height={24}
              className="size-6"
              alt="github"
            />
          </a>
        )}
      </div>
    </Div>
  );
}
