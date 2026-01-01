import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Home from "@/components/home/home";
import OptionNode from "@/components/option-node/option-node";
import Projects from "@/components/projects/projects";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div
      className="flex flex-col min-h-screen font-sans scroll-smooth gap-10"
      suppressHydrationWarning
    >
      <Header dictionary={dict} selectedLanguage={lang} />
      <Home dictionary={dict} />
      <About dictionary={dict} />
      <Projects dictionary={dict} selectedLanguage={lang} />
      <Contact dictionary={dict} />
      <OptionNode dictionary={dict} selectedLanguage={lang} />
    </div>
  );
}
