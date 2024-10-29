import { Link } from "@remix-run/react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Building,
  FileText,
  Calendar,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { SkillsCard } from "~/components/SkillsCard";

const workExperience = [
  {
    company: "TechCorp Inc.",
    position: "Senior Full Stack Developer",
    duration: "Jan 2021 - Present",
    description:
      "Lead development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
    achievements: [
      "Reduced application load time by 40% through optimizing database queries and implementing server-side rendering",
      "Spearheaded the adoption of TypeScript across the organization, resulting in a 30% decrease in production bugs",
      "Led a team of 5 developers in delivering a major product feature ahead of schedule",
    ],
  },
  {
    company: "InnoSoft Solutions",
    position: "Full Stack Developer",
    duration: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained multiple client-facing web applications. Worked closely with the design team to implement responsive and accessible user interfaces.",
    achievements: [
      "Implemented a new responsive design system, improving mobile user engagement by 25%",
      "Developed a custom CMS that reduced content update times by 60%",
      "Contributed to open-source projects, including a popular React component library",
    ],
  },
  {
    company: "StartUp Innovations",
    position: "Junior Web Developer",
    duration: "Jun 2016 - Feb 2018",
    description:
      "Assisted in the development of web applications using JavaScript, HTML, and CSS. Collaborated with senior developers to implement new features and fix bugs.",
    achievements: [
      "Developed and maintained the company's main product website",
      "Implemented automated testing, reducing QA time by 20%",
      "Received 'Rookie of the Year' award for exceptional performance and quick learning",
    ],
  },
];

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Viera Tito Virgiawan</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Backend Developer & Scrum Master
            </p>
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>Surabaya, ID</span>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <Building className="h-5 w-5 text-muted-foreground" />
              <span>Currently @ BETA U</span>
            </div>
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
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="./profile.jpg"
              alt="Viera Tito Virgiawan"
              className="rounded-full w-64 h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-muted-foreground">
          Hi, I&apos;m Viera Tito Virgiawan, a dedicated and motivated college
          student pursuing a Computer degree at Sepuluh Nopember Institute of
          Technology. Possessing a strong passion for Data Science and
          Programming and a proven track record of academic excellence. Eager to
          leverage my skills in Academic Lessons and Communication to contribute
          positively to challenging projects and collaborate with diverse teams.
          Known for my proactive approach, strong communication skills, and
          ability to adapt in dynamic environments. Seeking opportunities to
          further develop my expertise and make meaningful contributions in both
          academic and extracurricular pursuits.
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
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Project One Screenshot"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
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
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Project Two Screenshot"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
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
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Project Three Screenshot"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
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
        <SkillsCard />
      </section>

      {/* Work Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.position}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{job.duration}</span>
                </div>
                <p className="mb-4">{job.description}</p>
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
