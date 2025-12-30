import { PropsWithDictionary } from "@/types/types";
import { SunIcon } from "lucide-react";
import Link from "next/link";

export default function Header({ dictionary }: PropsWithDictionary) {
  return (
    <header>
      <nav>
        <a href="#home">{dictionary.navigation.home}</a>
        <a href="#about">{dictionary.navigation.about}</a>
        <a href="#projects">{dictionary.navigation.projects}</a>
        <a href="#contact">{dictionary.navigation.contact}</a>
      </nav>

      <div className="left-side">
        <button className="theme-btn">
          <SunIcon className="size-6" />
        </button>
        <Link className="language-options" href="/en-US" locale="">
          <p className="active rounded-l-full">PT</p>
          <p className="rounded-r-full">EN</p>
        </Link>
      </div>
    </header>
  );
}
