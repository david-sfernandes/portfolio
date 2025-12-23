import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-[92vh] w-full">
      <div className="flex flex-col items-center text-center">
        <div className="border border-foreground/15 rounded-full bg-white flex gap-4 p-2 pr-5 items-center w-fit">
          <div className="size-10 rounded-full outline outline-foreground/15 overflow-hidden grayscale hover:grayscale-0 transition-all duration-150 ease-in">
            <Image src="/profile.jpg" width={256} height={256} alt="foto perfil" className="object-cover size-full" />
          </div>
          <p className="text-xl">David Fernandes</p>
        </div>
        <h1 className="font-extrabold text-[6.75rem]/[6.75rem]">Desenvolvedor<br />Full Stack</h1>
        <p className="text-base text-foreground/60">
          Nunc maximus, tellus molestie accumsan placerat, nibh ante auctor erat, <br />eu tincidunt justo nulla non augue. Praesent est nec libero ultrices varius.
        </p>
      </div>
    </main>
  )
}