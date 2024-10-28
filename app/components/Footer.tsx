import { Link } from "@remix-run/react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                My Company
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Empowering your digital journey with innovative solutions and
              unparalleled support.
            </p>
            <div className="flex mt-8 space-x-6">
              <a
                href="https://facebook.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/brand"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Brand Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Help center
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    to="/discord"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Discord Server
                  </Link>
                </li>
                <li>
                  <Link
                    to="/twitter"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/facebook"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/license"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    License
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Subscribe
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <Input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  className="w-full min-w-0 px-4 py-2"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} My Company, Inc. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-foreground">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
