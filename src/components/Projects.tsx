import ProjectCard from "./ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ once: true });
  const { ref: noteRef, isVisible: noteVisible } = useScrollAnimation({ once: true });

  const projects = [
    {
      title: "Degree37",
      description:
        "Advanced blood donor portal for registration and engagement—multitenant architecture, ACL, and integrations that connect donors and recipients.",
      technologies: ["React", "Redux Toolkit", "Node.js", "Express", "JWT", "Keycloak"],
      link: "https://degree37.io/",
      highlights: ["Multitenant system", "ACL & roles", "Cron jobs & APIs"],
    },
    {
      title: "Right Farm",
      description:
        "Agricultural commerce platform linking farmers, suppliers, and buyers—with microservice-oriented architecture and rich admin workflows.",
      technologies: ["React", "Redux", "GraphQL", "Node.js", "MongoDB", "MySQL"],
      link: "#",
      highlights: ["Microservices", "Admin portal", "API development"],
    },
    {
      title: "Waltz AI",
      description:
        "AI-powered marketing suite: AI website & landing page builder, CRM with insights, email campaigns, AI Design Centre for visuals, analytics (heatmaps, opens, clicks), and assistant “Walter” for guided workflows—Business & Pro plans with credits and integrations.",
      technologies: ["React", "Node.js", "REST APIs", "CRM", "Analytics", "AI integrations"],
      link: "https://waltz-ai.com/",
      highlights: ["Full-stack product features", "CRM & campaigns", "AI builders & analytics"],
    },
    {
      title: "Vertex Inspector",
      description:
        "Mobile inspection app for assets: record defects with photos, titles, assignees, and comments; organize issues into projects with site and client metadata; export defect schedules to CSV. Contributed across the mobile/web frontend, Node.js backend services, and admin tooling.",
      technologies: ["React Native / Mobile UI", "Node.js", "REST APIs", "Admin dashboard"],
      link: "https://play.google.com/store/apps/details?id=com.alburraq.vertex&hl=en",
      highlights: ["Field workflows", "Reporting & CSV", "Admin + backend"],
    },
    {
      title: "Olleh.ai",
      description:
        "AI voice and conversational platform oriented toward customer calls and support—automating outreach, intelligent routing, and scalable voice-driven experiences (positioned as AI voice agents for customer engagement). Work spanned customer-facing flows and supporting backend services.",
      technologies: ["Node.js", "Voice / telephony integrations", "React", "AI / NLP pipelines"],
      link: "https://olleh.ai/",
      highlights: ["Voice & support automation", "Frontend + Node backend", "Product integrations"],
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-14 ${titleVisible ? "animate-fade-up" : "scroll-hidden"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Platforms and products I've helped ship—full stack, admin, and integrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>

          <div
            ref={noteRef}
            className={`mt-14 text-center glass rounded-2xl p-8 border border-border shadow-md ${noteVisible ? "animate-scale-in" : "scroll-hidden"}`}
          >
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-foreground">Note:</span> Some internal admin panels and
              client tools are not public; descriptions above reflect features marketed on live sites or
              app stores where applicable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
