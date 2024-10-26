import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="px-4 fixed left-0 w-full lg:px-6 h-14 bg-animation z-50">
      <nav className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <a href="/" className="flex items-center justify-center gap-1">
          <img src={Logo.src} alt="QuakeNet" className="size-9" />
          <h1 className="text-lg font-bold">QueakeNet</h1>
        </a>
        <ul className="hidden gap-4 sm:gap-6 lg:flex">
          <li>
            <a
              href="/#soluciones"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Soluciones
            </a>
          </li>
          <li>
            <a
              href="/sobre-nosotros"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a
              href="#contacto-empresa"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contacto Empresa
            </a>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ul className="grid gap-4 py-4">
              <li>
                <SheetClose asChild>
                  <a
                    href="/#soluciones"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Soluciones
                  </a>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <a
                    href="/sobre-nosotros"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Sobre Nosotros
                  </a>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <a
                    href="#contacto-empresa"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Contacto Empresa
                  </a>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
