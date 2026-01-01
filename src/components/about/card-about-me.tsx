import { div as Div } from "motion/react-client";
import CardText from "./card-text";
import CardTitle from "./card-title";

export default function CardAboutMe({
  className,
  title,
  content,
}: {
  className: string;
  title: string;
  content: string;
}) {
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
      <div className="space-y-2">
        <CardTitle>{title}</CardTitle>
        <CardText>{content}</CardText>
      </div>
    </Div>
  );
}
