import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisIcon, LanguagesIcon, SunIcon } from "lucide-react";

export default function OptionNode() {
  return (
    <div className="fixed bottom-3 right-3.5">
      <Menu>
        <MenuButton className="border border-foreground/15 rounded-full size-8.5 bg-white flex md:hidden items-center justify-center">
          <EllipsisIcon className="text-foreground/80 size-5" />
        </MenuButton>
        <MenuItems anchor="top end" className="border border-foreground/10 outline-0 rounded-2xl bg-white gap-2 flex flex-col p-2 w-[250px]">
          <MenuItem>
            <button className="rounded-xl px-2.5 py-2 pr-3.5 flex gap-4 hover:bg-foreground/15 w-full items-center">
              <SunIcon className="size-4 text-foreground/60" />
              <p>Tema</p>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="rounded-xl px-2.5 py-2 pr-3.5 flex gap-4 hover:bg-foreground/15 w-full items-center">
              <LanguagesIcon className="size-4 text-foreground/60" />
              <p>Idioma</p>
              <p className="text-xs ml-auto">PT</p>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}