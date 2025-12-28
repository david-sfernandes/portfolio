import CardStack from "./card-stack";

export default function CardBackend({ className }: { className: string }) {
  return (
    <CardStack
      title="Back-End"
      text="Atuo no desenvolvimento de back-ends, criando APIs, serviços e integrações que sustentam aplicações modernas."
      className={className}
    />
  );
}
