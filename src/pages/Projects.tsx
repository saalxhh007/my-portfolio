import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Portfolio/Navigation";
import bookstore from "@/assets/bookstore.webp";
import eventia from "@/assets/eventia.webp";
import medical_dashboard from "@/assets/medical-dashboard1.webp";
import bookstore1 from "@/assets/bookstore1.webp";
import bookstore2 from "@/assets/bookstore2.webp";
import bookstore3 from "@/assets/bookstore3.webp";
import eventia1 from "@/assets/eventia1.webp";
import eventia2 from "@/assets/eventia2.webp";
import eventia3 from "@/assets/eventia3.webp";
import eventia4 from "@/assets/eventia4.webp";
import eventia5 from "@/assets/eventia5.webp";
import medical_dashboard2 from "@/assets/medical-dashboard2.webp";
import medical_dashboard3 from "@/assets/medical-dashboard3.webp";
import medical_dashboard4 from "@/assets/medical-dashboard4.webp";
import tech_store from "@/assets/tech_store.webp";
import tech_store1 from "@/assets/tech_store1.webp";
import tech_store2 from "@/assets/tech_store2.webp";
import tech_store3 from "@/assets/tech_store3.webp";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Book Store Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      fullDescription: "A full-featured e-commerce solution that combines beautiful design with powerful functionality. Features include comprehensive inventory management, and a responsive design that works perfectly across all devices.",
      image: bookstore,
      detailImages: [bookstore, bookstore1, bookstore2, bookstore3],
      tags: ["Next.js", "Express.js", "JWT", "Postgres"],
      demoUrl: "https://book-store-lfwm.vercel.app/",
      githubUrl: "https://github.com/saalxhh007/Book-store",
      features: [
        "Advanced inventory management",
        "Responsive design for all devices",
        "Admin dashboard for business insights",
        "Customer review and rating system"
      ]
    },
    {
      title: "Event Management Website",
      description: "An Event management website with renting for ( weddings, parties...), dashboard... features.",
      fullDescription: "This event management website offers a comprehensive solution for users to plan and manage events seamlessly. With beautiful design and powerful features, it includes secure payment processing, extensive inventory management, and a responsive layout that ensures optimal performance across all devices.",
      image: eventia,
      detailImages: [eventia, eventia1, eventia2, eventia3, eventia4, eventia5],
      tags: ["Next.js", "Node.js", "Nodemailer", "Postgres"],
      demoUrl: "https://eventia-lac.vercel.app",
      githubUrl: "https://github.com/saalxhh007/eventia",
        features: [
            "Advanced inventory management for tracking venues and services",
            "Responsive design ensuring accessibility on all devices",
            "Admin dashboard providing insights and analytics for event management",
            "Customer review and rating system to enhance trust and feedback",
            "Real-time availability checking for venues and services",
            "Customizable event packages to meet diverse customer needs",
            "Integrated communication tools for seamless interaction between clients and service providers"
      ]
    },
    {
      title: "Medical Dashboard",
      description: "Data visualization dashboard with interactive charts, real-time updates, and comprehensive reporting capabilities.",
      fullDescription: "An advanced analytics dashboard that transforms complex data into actionable insights. Features interactive charts, real-time data updates, and comprehensive reporting tools that help businesses make data-driven decisions.",
      image: medical_dashboard,
      detailImages: [ medical_dashboard, medical_dashboard2, medical_dashboard3, medical_dashboard4],
      tags: ["Next.js", "Express.js", "Mysql"],
      demoUrl: "https://medical-cabinet-dashboard-9dxw-cni6wusd8.vercel.app/",
      githubUrl: "https://github.com/saalxhh007/Medical-Cabinet-Dashboard",
      features: [
        "Interactive data visualizations",
        "Real-time data updates",
        "Customizable dashboard layouts",
        "Advanced filtering and search",
        "Export capabilities for reports"
      ]
    },
    {
      title: "Tech-Store",
      description: "Ecommerce Websitem  A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      fullDescription: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard in order to sell phones, laptops and accessoires",
      image: tech_store,
      detailImages: [tech_store, tech_store1, tech_store2, tech_store3],
      tags: ["Next.js", "Express.js", "Mysql"],
      demoUrl: "https://tech-store-git-main-mghsalah2-5217s-projects.vercel.app/",
      githubUrl: "https://github.com/saalxhh007/Tech-Store",
      features: [
        "Interactive data visualizations",
        "Real-time data updates",
        "Customizable dashboard layouts",
        "Advanced filtering and search",
        "Export capabilities for reports"
      ]
    }
  ]

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject];
      setCurrentImageIndex((prev) => 
        prev === project.detailImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject];
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.detailImages.length - 1 : prev - 1
      );
    }
  };

  const openProject = (index: number) => {
    setSelectedProject(index);
    setCurrentImageIndex(0);
  };

  const selectedProjectData = selectedProject !== null ? projects[selectedProject] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my work showcasing different technologies and approaches to solving real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card 
                    className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer"
                    onClick={() => openProject(index)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold">View Details</span>
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
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{selectedProjectData?.title}</DialogTitle>
                  </DialogHeader>
                  
                  {selectedProjectData && (
                    <div className="space-y-6">
                      {/* Image Gallery */}
                      <div className="relative">
                        <img 
                          src={selectedProjectData.detailImages[currentImageIndex]}
                          alt={`${selectedProjectData.title} - Image ${currentImageIndex + 1}`}
                          className="w-full h-64 md:h-80 object-cover rounded-lg"
                        />
                        
                        {selectedProjectData.detailImages.length > 1 && (
                          <>
                            <Button 
                              variant="secondary" 
                              size="sm"
                              className="absolute left-2 top-1/2 transform -translate-y-1/2"
                              onClick={prevImage}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="secondary" 
                              size="sm"
                              className="absolute right-2 top-1/2 transform -translate-y-1/2"
                              onClick={nextImage}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                            
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                              {selectedProjectData.detailImages.map((_, index) => (
                                <button
                                  key={index}
                                  className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentImageIndex ? 'bg-primary' : 'bg-primary/30'
                                  }`}
                                  onClick={() => setCurrentImageIndex(index)}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Project Details */}
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          {selectedProjectData.fullDescription}
                        </p>

                        <div>
                          <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {selectedProjectData.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProjectData.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <Button asChild>
                            <a href={selectedProjectData.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a href={selectedProjectData.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
