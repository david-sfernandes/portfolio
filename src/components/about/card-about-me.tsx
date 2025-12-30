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
    <div className={`card-layout ${className}`}>
      <div className="space-y-2">
        <CardTitle>{title}</CardTitle>
        <CardText>{content}</CardText>
      </div>
    </div>
  );
}
