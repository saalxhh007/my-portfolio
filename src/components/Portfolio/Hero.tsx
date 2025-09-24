import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/MEGHZILI-Abderrahmen.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Full Stack
              <span className="block text-accent"> Developer</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-2xl">
              I craft beautiful, functional web experiences that bring ideas to life. 
              Passionate about clean code and innovative design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/projects">
                <Button size="lg" variant="secondary" className="group">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Link to="#contact">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground">
                  Get In Touch
                </Button>
              </Link>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-6">
              <a href="https://github.com/saalxhh007" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/abderrahmen-meghzili-b596b0278/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="lg:order-last animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-3xl opacity-30"></div>
              <img 
                src={heroImage} 
                alt="Professional developer portrait"
                className="relative z-10 w-full max-w-80 max-h-100 mx-auto rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground" />
      </div>
    </section>
  );
};

export default Hero;