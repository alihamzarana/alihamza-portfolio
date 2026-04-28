import { Calendar, Code2, Users, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ once: true });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ once: true });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ once: true });
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation({ once: true });

  const stats = [
    { icon: Calendar, label: "Years Experience", value: "5+" },
    { icon: Code2, label: "Products & platforms", value: "10+" },
    { icon: Users, label: "Cross-functional delivery", value: "Agile" },
    { icon: Rocket, label: "Focus", value: "Ship quality" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-14 ${titleVisible ? "animate-fade-up" : "scroll-hidden"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Full stack engineer focused on clean architecture, performance, and products users trust.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div ref={contentRef} className={`${contentVisible ? "animate-slide-in-left" : "scroll-hidden"}`}>
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm Ali Hamza, a Full Stack Developer with experience across Node.js backends, React
                frontends, admin dashboards, and integrations—from inspection tooling and agriculture
                platforms to AI-assisted marketing suites.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I've contributed at Cooperative Computing and CraftyTer Solution as a Node.js developer,
                and since 2023 I've been building production systems at AlBurraq Technologies alongside
                client-facing products like Waltz AI and Olleh.ai.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I care about maintainable code, clear APIs, and UX that feels effortless—whether that's a
                mobile field app, an operations console, or a marketing funnel powered by AI.
              </p>
            </div>

            <div
              ref={statsRef}
              className={`grid grid-cols-2 gap-6 ${statsVisible ? "animate-slide-in-right" : "scroll-hidden"}`}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 border border-border/80"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-primary mb-4 shadow-md">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={tableRef}
            className={`glass rounded-2xl p-8 md:p-10 border border-border shadow-lg ${tableVisible ? "animate-scale-in" : "scroll-hidden"}`}
          >
            <h3 className="text-2xl font-bold mb-6">What I Bring</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-2">Full stack delivery</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  End-to-end features across React SPAs, Node APIs, auth, and databases—with attention to
                  security and performance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Product mindset</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comfortable translating requirements into shippable increments and collaborating with
                  design and stakeholders.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Modern toolchain</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Experience with cloud deploys, integrations, and AI-assisted development workflows that
                  keep velocity high without sacrificing quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
