import CardText from "./card-text";
import CardTitle from "./card-title";

export default function CardAboutMe({ className }: { className: string }) {
  return (
    <div className={`card-layout ${className}`}>
      <div className="space-y-2">
        <CardTitle>Aprenda mais sobre mim</CardTitle>
        <CardText>
          Sou desenvolvedor de software <b>Full Stack</b> com experiência na
          construção de aplicações web modernas e escaláveis, atuando tanto no
          desenvolvimento de <b>interfaces eficientes</b> e <b>responsivas</b>{" "}
          quanto na implementação de <b>backends sólidos</b> e{" "}
          <b>bem estruturados</b>. Gosto de unir lógica e criatividade para
          criar soluções funcionais, organizadas e com foco na experiência do
          usuário. Encaro a programação como uma ferramenta para resolver
          problemas reais e transformar necessidades em produtos através da
          tecnologia.
        </CardText>
      </div>
    </div>
  );
}
