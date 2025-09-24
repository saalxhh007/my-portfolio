import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "Tailwind CSS", "Next.js", "Express", "MongoDB"
  ];

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful interfaces with attention to user experience."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional results."
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 3+ years of experience creating 
            digital solutions that make a difference. I love turning complex problems 
            into simple, beautiful designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-16 items-center mb-16">

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;