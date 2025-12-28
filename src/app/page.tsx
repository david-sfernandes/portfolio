import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Home from "@/components/home/home";
import OptionNode from "@/components/option-node/option-node";
import Projects from "@/components/projects/projects";

export default function Page() {
  return (
    <div
      className="flex flex-col min-h-screen font-sans scroll-smooth gap-10"
      suppressHydrationWarning
    >
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <OptionNode />
    </div>
  );
}
