"use client";
import { PropsWithDictionary } from "@/types/types";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header({
  dictionary,
  selectedLanguage,
}: PropsWithDictionary & { selectedLanguage: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <nav>
        <a href="#home">{dictionary.navigation.home}</a>
        <a href="#about">{dictionary.navigation.about}</a>
        <a href="#projects">{dictionary.navigation.projects}</a>
        <a href="#contact">{dictionary.navigation.contact}</a>
      </nav>

      <div className="left-side">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="theme-btn"
        >
          {theme === "light" ? (
            <MoonIcon className="size-6" />
          ) : (
            <SunIcon className="size-6" />
          )}
        </button>
        <Link
          className="language-options"
          href={selectedLanguage === "pt-BR" ? "/en-US" : "/pt-BR"}
        >
          <p className="active rounded-l-full">PT</p>
          <p className="rounded-r-full">EN</p>
        </Link>
      </div>
    </header>
  );
}
