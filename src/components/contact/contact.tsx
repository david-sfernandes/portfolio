import { PropsWithDictionary } from "@/types/types";
import Image from "next/image";
import BtnSocial from "./btn-social";
import { section as Section } from "motion/react-client";

export default function Contact({ dictionary }: PropsWithDictionary) {
  return (
    <Section
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.2,
        scale: { type: "spring", visualDuration: 0.2, bounce: 0.4 },
      }}
      className="flex flex-col w-full items-center  md:min-h-screen gap-6 px-6 md:px-9.5 py-3 pt-24"
      id="contact"
    >
      <div className="bg-linear-30 from-foreground to-darker rounded-3xl h-full max-h-96 md:max-h-none w-full flex px-11 py-14 flex-1 flex-col isolate relative overflow-hidden">
        <Image
          src="/contact_image.svg"
          width={400}
          height={400}
          className="absolute -right-20 -bottom-20 -z-1"
          alt=""
        />
        <h4 className="text-white text-2xl md:text-8xl font-medium">
          {dictionary.contact.title}
        </h4>
        <div className="flex flex-col md:flex-row gap-3 mt-10">
          <BtnSocial url="https://www.linkedin.com/in/david-sfernandes/">
            LinkedIn
          </BtnSocial>
          <BtnSocial url="https://github.com/david-sfernandes">
            GitHub
          </BtnSocial>
          <BtnSocial url="mailto:davisou.fer@gmail.com">E-mail</BtnSocial>
        </div>
      </div>
      <p className="text-foreground/60 text-xs text-center">
        {dictionary.contact.copyright}
      </p>
    </Section>
  );
}
