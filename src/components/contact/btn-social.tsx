import { SquareArrowOutUpRight } from "lucide-react";

export default function BtnSocial({ text, url }: { text: string, url: string }) {
  return (
    <a href={url} className="rounded-full p-1 pr-5 bg-black/20 w-fit flex gap-2.5 items-center">
      <div className="bg-foreground rounded-full size-9 flex justify-center items-center">
        <SquareArrowOutUpRight className="text-white size-5" />
      </div>
      <p className="text-white text-lg font-normal">{text}</p>
    </a>
  )
}