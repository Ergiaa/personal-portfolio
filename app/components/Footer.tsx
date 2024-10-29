import { Link } from "@remix-run/react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <h2 className="text-2xl font-bold">Viera Tito Virgiawan</h2>
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              Backend Developer based in Surabaya, ID
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <a
                  href="https://github.com/Ergiaa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a
                  href="https://www.linkedin.com/in/viera-tito-4b1b73245/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="mailto:vieratito21@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="/CV_Viera Tito Virgiawan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-5 w-5" />
                  <span className="sr-only">Resume</span>
                </a>
              </Button>
            </div>
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/projects" className="hover:text-foreground">
              Projects
            </Link>
            <Link to="/about" className="hover:text-foreground">
              About
            </Link>
            <Link to="/blog" className="hover:text-foreground">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
