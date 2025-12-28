import { SunIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
      </nav>

      <div className="left-side">
        <button className="theme-btn">
          <SunIcon className="size-6" />
        </button>
        <Link className="language-options" href="/en">
          <p className="active rounded-l-full">
            PT
          </p>
          <p className="rounded-r-full">
            EN
          </p>
        </Link>
      </div>
    </header>
  );
}
