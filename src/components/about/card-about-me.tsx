import CardText from "./card-text";
import CardTitle from "./card-title";

export default function CardAboutMe({ className }: { className: string }) {
  return (
    <div className={`card-layout ${className}`}>
      <div className="space-y-2">
        <CardTitle>Aprenda mais sobre mim</CardTitle>
        <CardText>
          Sou desenvolvedora de software Full Stack com experiência na criação de aplicações web modernas e escaláveis, atuando tanto no desenvolvimento de interfaces intuitivas quanto na implementação de backends robustos. Gosto de unir criatividade e lógica para criar soluções que sejam bonitas, funcionais e fáceis de usar. Vejo a programação como uma forma de resolver problemas e contar histórias por meio da tecnologia.
        </CardText>
      </div>
    </div>
  )
}