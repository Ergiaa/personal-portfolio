import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const skillsData = {
  Languages: ["JavaScript", "TypeScript", "Python"],
  Frameworks: ["Express", "Flask", "Remix", "React", "Next.js"],
  Databases: ["PostgreSQL", "MySQL"],
  ORMs: ["Prisma", "SQLAlchemy"],
  Tools: ["Git", "Docker"],
};

export function SkillsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(skillsData).map(([category, skills]) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle>{category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
