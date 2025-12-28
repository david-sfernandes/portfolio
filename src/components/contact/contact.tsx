import Image from "next/image";
import BtnSocial from "./btn-social";

export default function Contact() {
  return (
    <section className="flex flex-col w-full items-center  md:min-h-screen gap-6 px-6 md:px-9.5 py-3 pt-24">
      <div className="bg-linear-30 from-foreground to-darker rounded-3xl h-full max-h-96 md:max-h-none w-full flex px-11 py-14 flex-1 flex-col isolate relative">
        <Image
          src="/contact_image.svg"
          width={400}
          height={400}
          className="absolute -right-20 -bottom-20"
          alt=""
        />
        <h4 className="text-white text-2xl md:text-8xl font-medium">
          Me acompanhe
          <br />
          por aqui
        </h4>
        <div className="flex flex-col md:flex-row gap-3 mt-10">
          <BtnSocial text="LinkeIn" url="#" />
          <BtnSocial text="GitHub" url="#" />
          <BtnSocial text="E-mail" url="#" />
        </div>
      </div>
      <p className="text-foreground/60 text-xs text-center">
        © 2026 David Fernandes - Todos os direitos reservados
      </p>
    </section>
  );
}
