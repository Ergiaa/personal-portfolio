import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Viera Tito Virgiawan - Portofolio" },
    { name: "description", content: "Welcome to My Portofolio!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">John Doe</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="mailto:john@example.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-muted-foreground">
          I&apos;m a passionate full stack developer with 5 years of experience
          in building web applications. I specialize in React, Node.js, and
          modern web technologies. When I&apos;m not coding, you can find me
          exploring new tech, contributing to open-source projects, or enjoying
          a good cup of coffee.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project One</CardTitle>
              <CardDescription>A React-based web application</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built a responsive web app using React, Redux, and Node.js,
                featuring real-time data updates and user authentication.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link to="/projects/1">View Project</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project Two</CardTitle>
              <CardDescription>An e-commerce platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Developed a full-featured e-commerce platform using Next.js,
                Stripe for payments, and a headless CMS for content management.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link to="/projects/2">View Project</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project Three</CardTitle>
              <CardDescription>
                A mobile app for task management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Created a cross-platform mobile app using React Native and
                Firebase, enabling users to manage tasks and collaborate in
                real-time.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link to="/projects/3">View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "SQL",
            "Git",
            "AWS",
            "Docker",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-muted-foreground mb-8">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out if you&apos;d like to discuss a project or just say
          hello!
        </p>
        <Button asChild>
          <Link to="/contact">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
