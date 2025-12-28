import CardStack from "./card-stack";

export default function CardFrontend({ className }: { className: string }) {
  return (
    <CardStack
      title="Front-End"
      text="Desenvolvo interfaces modernas e responsivas, sempre priorizando usabilidade, desempenho e qualidade visual."
      className={className}
    />
  );
}
