import { Link } from "@remix-run/react";
import { LucideIcon } from "lucide-react";

import { Button } from "~/components/ui/button";

interface Props {
  icon: LucideIcon;
  label: string;
  href?: string;
}

export default function NavButton({ icon: Icon, label, href = "" }: Props) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      aria-label={label}
      asChild
    >
      {href ? (
        <Link to={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
}
