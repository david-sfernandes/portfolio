import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Home from "@/components/home/home";
import OptionNode from "@/components/option-node/option-node";
import Projects from "@/components/projects/projects";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";

export default async function Page({ params }: PageProps<'/[lang]'>)  {
  const { lang } = await params
  console.log({lang})
 
  if (!hasLocale(lang)) notFound()
 
  const dict = await getDictionary(lang)
  console.log(dict)
  
  return (
    <div
      className="flex flex-col min-h-screen font-sans scroll-smooth gap-10"
      suppressHydrationWarning
    >
      <Header />
      <Home dictionary={dict.home} />
      <About />
      <Projects />
      <Contact />
      <OptionNode />
    </div>
  );
}
