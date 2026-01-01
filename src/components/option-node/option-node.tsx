"use client";
import { PropsWithDictionary } from "@/types/types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisIcon, LanguagesIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function OptionNode({
  dictionary,
  selectedLanguage,
}: PropsWithDictionary & { selectedLanguage: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed bottom-3 right-3.5">
      <Menu>
        <MenuButton className="border border-foreground/15 rounded-full size-8.5 bg-white flex md:hidden items-center justify-center">
          <EllipsisIcon className="text-foreground/80 size-5" />
        </MenuButton>
        <MenuItems
          anchor="top end"
          className="border border-foreground/10 outline-0 rounded-2xl bg-white gap-2 flex flex-col p-2 w-62.5"
        >
          <MenuItem>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-xl px-2.5 py-2 pr-3.5 flex gap-4 hover:bg-foreground/15 w-full items-center"
            >
              {theme === "light" ? (
                <MoonIcon className="size-4 text-foreground/60" />
              ) : (
                <SunIcon className="size-4 text-foreground/60" />
              )}
              <p>{dictionary.options.theme}</p>
            </button>
          </MenuItem>
          <MenuItem>
            <a
              href={selectedLanguage === "pt-BR" ? "/en-US" : "/pt-BR"}
              className="rounded-xl px-2.5 py-2 pr-3.5 flex gap-4 hover:bg-foreground/15 w-full items-center"
            >
              <LanguagesIcon className="size-4 text-foreground/60" />
              <p>{dictionary.options.language}</p>
              <p className="text-xs ml-auto">
                {dictionary.options.currentLanguage}
              </p>
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
