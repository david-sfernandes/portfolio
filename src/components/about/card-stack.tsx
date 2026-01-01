"use client";
import Image from "next/image";
import CardText from "./card-text";
import CardTitle from "./card-title";
import { div as Div } from "motion/react-client";
import { useTheme } from "next-themes";

export default function CardStack({
  className,
  title,
  text,
  img,
  imgDark,
}: {
  className: string;
  title: string;
  text: string;
  img: string;
  imgDark: string;
}) {
  const { theme } = useTheme();

  return (
    <Div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{
        duration: 0.2,
        scale: { type: "spring", visualDuration: 0.2, bounce: 0.4 },
      }}
      className={`card-layout ${className}`}
    >
      <div className="card-stack-content">
        <div className="flex-1">
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </div>
        <div className="size-20 md:size-25 shrink-0 overflow-hidden block">
          <Image
            src={theme === "light" ? img : imgDark}
            width={230}
            height={230}
            className="object-cover size-full"
            alt="server image"
          />
        </div>
      </div>
    </Div>
  );
}
