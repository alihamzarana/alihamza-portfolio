import { useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/ali-hamza-profile.png";
import EmailPopup from "./EmailPopup";
import LazyParticleNetwork from "./LazyParticleNetwork";
import { useParallax } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const { ref: parallaxRef, offset } = useParallax(0.3);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEmailPopupOpen(true);
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero animate-gradient" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <LazyParticleNetwork />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left animate-slide-up">
                <div className="inline-block px-4 py-2 glass rounded-full mb-6 border-primary/20 shadow-sm">
                  <span className="text-sm font-medium text-primary">Available for opportunities</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                  Hi, I'm <span className="text-gradient">Ali Hamza</span>
                </h1>

                <h2 className="text-xl sm:text-2xl lg:text-3xl text-foreground/75 mb-6 font-medium">
                  Full Stack Developer
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  I build scalable web applications with React, Node.js, and modern tooling—from CRM and
                  marketing platforms to mobile companion apps and AI-powered products.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <a
                    href="#contact"
                    className="px-6 py-3 gradient-primary text-primary-foreground rounded-xl font-medium hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02] text-center shadow-md"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="#projects"
                    className="px-6 py-3 glass border border-primary/25 text-foreground rounded-xl font-medium hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    View work
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                  <a
                    href="https://www.linkedin.com/in/ali71"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/alihamzarana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                  <button
                    type="button"
                    onClick={handleEmailClick}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    aria-label="Send Email"
                  >
                    <Mail size={24} />
                  </button>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} />
                    <span className="text-sm">Lahore, Pakistan</span>
                  </div>
                </div>
              </div>

              <div
                ref={parallaxRef}
                className="flex justify-center lg:justify-end animate-slide-up"
                style={{ transform: `translateY(${offset}px)` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-accent/20 rounded-full blur-3xl animate-glow scale-110" />
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass p-2 shadow-xl ring-2 ring-primary/10">
                    <img
                      src={profileImage}
                      alt="Ali Hamza — Full Stack Developer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmailPopup isOpen={isEmailPopupOpen} onClose={() => setIsEmailPopupOpen(false)} />
    </>
  );
};

export default Hero;
