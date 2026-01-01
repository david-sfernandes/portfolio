import { PropsWithDictionary } from "@/types/types";
import Image from "next/image";
import { div as Div } from "motion/react-client";

export default function Home({ dictionary }: PropsWithDictionary) {
  return (
    <main
      className="flex justify-center items-center h-screen w-full"
      id="home"
    >
      <div className="flex flex-col items-center text-center max-w-full">
        <Div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.2,
            scale: { type: "spring", visualDuration: 0.2, bounce: 0.4 },
          }}
          className="scale-85 md:scale-100 border border-foreground/15 rounded-full bg-white flex gap-4 p-2 pr-5 items-center w-fit"
        >
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
        </Div>
        <h1 className="text-4xl/12 font-extrabold md:text-[6.75rem]/[6.75rem]">
          {dictionary.home.title}
        </h1>
        <p className="text-sm md:text-base text-foreground/60 px-2 md:px-0 mt-2">
          {dictionary.home.description}
        </p>
      </div>
    </main>
  );
}
