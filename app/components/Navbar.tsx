"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      } transition-colors`}
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Button
            variant="ghost"
            className="mr-6 p-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-bold px-2">Viera Tito</span>
          </Button>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="p-0 px-2"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden pl-2"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Button
              variant="ghost"
              className="mb-4 p-0"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                document.body.classList.remove("overflow-hidden");
              }}
            >
              John Doe
            </Button>
            <div className="my-4 h-[1px] bg-border" />
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <MobileNavItem key={item.href} href={item.href}>
                  {item.name}
                </MobileNavItem>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add search functionality here if needed */}
          </div>
          <nav className="flex items-center">
            <Button
              variant="ghost"
              className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="font-bold">John Doe</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

interface MobileNavItemProps {
  href: string;
  children: React.ReactNode;
}

function MobileNavItem({ href, children }: MobileNavItemProps) {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start"
      onClick={() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          document.body.classList.remove("overflow-hidden");
        }
      }}
    >
      {children}
    </Button>
  );
}
