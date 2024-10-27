import { useState } from "react";
import { Link } from "@remix-run/react";
import { Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Separator } from "~/components/ui/separator";

interface MobileNavProps {
  menuItems: Array<{
    title: string;
    href?: string;
    items?: Array<{ title: string; href: string; description: string }>;
  }>;
}

export function MobileNav({ menuItems }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          to="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <span className="font-bold">My Company</span>
        </MobileLink>
        <Separator className="my-4" />
        <div className="flex flex-col space-y-3">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.items ? (
                <div className="flex flex-col space-y-2">
                  <span className="font-medium">{item.title}</span>
                  {item.items.map((subItem) => (
                    <MobileLink
                      key={subItem.title}
                      to={subItem.href}
                      onClick={() => setOpen(false)}
                    >
                      {subItem.title}
                    </MobileLink>
                  ))}
                </div>
              ) : (
                <MobileLink
                  to={item.href || "#"}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </MobileLink>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  to,
  onClick,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link to={to} onClick={onClick} className={className} {...props}>
      {children}
    </Link>
  );
}
