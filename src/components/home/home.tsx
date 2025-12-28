import Image from "next/image";

export default function Home({ dictionary }: { dictionary: Record<string, string> }) {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col items-center text-center max-w-full">
        <div className="scale-85 md:scale-100 border border-foreground/15 rounded-full bg-white flex gap-4 p-2 pr-5 items-center w-fit">
          <div className="size-10 rounded-full outline outline-foreground/15 overflow-hidden grayscale hover:grayscale-0 transition-all duration-150 ease-in">
            <Image
              src="/profile.jpg"
              width={256}
              height={256}
              alt="foto perfil"
              className="object-cover size-full"
            />
          </div>
          <p className="text-xl">David Fernandes</p>
        </div>
        <h1 className="text-4xl/12 font-extrabold md:text-[6.75rem]/[6.75rem]">
          {dictionary.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <p className="text-sm md:text-base text-foreground/60 px-2 md:px-0 mt-2">
          Sou desenvolvedor Full Stack, apaixonado por tecnologia e por
          construir aplicações funcionais. <br />
          Este site reúne alguns dos meus principais projetos e experiências.
        </p>
      </div>
    </main>
  );
}
