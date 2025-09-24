import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import bookstore from "@/assets/bookstore.webp";
import eventia from "@/assets/eventia.webp";
import medical_dashboard from "@/assets/medical-dashboard.webp";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Book Store Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      image: bookstore,
      tags: ["Next.js", "Express.js", "JWT", "Postgres"],
      demoUrl: "https://book-store-lfwm.vercel.app/",
      githubUrl: "https://github.com/saalxhh007/Book-store"
    },
    {
      title: "Event Management Website",
      description:
        "An Event management website with renting for ( weddings, parties...), dashboard... features.",
      image: eventia,
      tags: ["Next.js", "Node.js", "Nodemailer", "Postgres"],
      demoUrl: "#",
      githubUrl: "https://github.com/saalxhh007/eventia"
    },
    {
      title: "Medical Clinic Dashboard",
      description: "A responsive medical application with patients management and interactive charts.",
      image: medical_dashboard,
      tags: ["Next.js", "Express.js", "Postgres"],
      demoUrl: "https://medical-cabinet-dashboard-9dxw-cni6wusd8.vercel.app/",
      githubUrl: "https://github.com/saalxhh007/Medical-Cabinet-Dashboard"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I'm most proud of. Each one represents 
            a unique challenge and showcases different aspects of my skill set.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;