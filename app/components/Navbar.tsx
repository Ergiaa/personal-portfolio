import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { MobileNav } from "./MobileNav";

const menuItems = [
  {
    title: "Features",
    items: [
      {
        title: "Feature 1",
        href: "/features/1",
        description: "Description of Feature 1",
      },
      {
        title: "Feature 2",
        href: "/features/2",
        description: "Description of Feature 2",
      },
      {
        title: "Feature 3",
        href: "/features/3",
        description: "Description of Feature 3",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Documentation",
        href: "/docs",
        description: "Read our documentation",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Check out our latest posts",
      },
      {
        title: "Support",
        href: "/support",
        description: "Get help from our team",
      },
    ],
  },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-2">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">My Company</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  ) : (
                    <Link to={item.href} className="font-medium">
                      <NavigationMenuLink>{item.title}</NavigationMenuLink>
                    </Link>
                  )}
                  {item.items && (
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {item.items.map((subItem) => (
                          <li key={subItem.title} className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link
                                to={subItem.href}
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              >
                                <div className="mb-2 text-lg font-medium">
                                  {subItem.title}
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {subItem.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <MobileNav menuItems={menuItems} />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add search functionality here if needed */}
          </div>
          <nav className="flex items-center">
            <Button
              variant="ghost"
              className="mr-6 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Link to="/">
                <span className="font-bold">My Company</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
