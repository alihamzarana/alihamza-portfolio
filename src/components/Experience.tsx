import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "AlBurraq Technologies",
      position: "Software Engineer (Full Stack / MERN)",
      location: "Lahore, Pakistan",
      period: "2023 – Present",
      responsibilities: [
        "Build and maintain scalable web apps with React, Next.js, Node.js, Nest.js, REST/GraphQL, PostgreSQL, MongoDB, and cloud deploys (AWS, Vercel, Heroku)",
        "Deliver admin dashboards, APIs, and integrations for client products including AI-marketing and voice-agent platforms",
        "Collaborate with cross-functional teams on features, performance, and production reliability",
      ],
    },
    {
      company: "Cooperative Computing",
      position: "MERN Stack Developer",
      location: "Lahore, Pakistan",
      period: "2022 – 2023",
      responsibilities: [
        "Built and maintained backend services with Node.js, focusing on APIs and database-backed workflows",
        "Participated in code reviews, testing, and iterative delivery in an agile environment",
        "Strengthened fundamentals in JavaScript, async patterns, and scalable service design",
      ],
    },
    {
      company: "Crafter Solutions",
      position: "Node.js Developer",
      location: "Lahore, Pakistan",
      period: "2021 – 2022",
      responsibilities: [
        "Developed server-side features with Node.js and Express (or Nest), integrating REST APIs and data layers",
        "Implemented authentication flows, business logic, and third-party integrations",
        "Worked with front-end teams to ship cohesive features and resolve production issues",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From dedicated Node.js roles to full stack delivery at AlBurraq
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-60" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
              >
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md z-10 ring-2 ring-primary/30" />

                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-8 md:pl-0`}
                >
                  <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 border border-border/90 shadow-md">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-primary mb-2 flex-wrap">
                          <Building size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 flex-wrap">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <ul
                          className={`text-sm text-muted-foreground space-y-2 ${index % 2 === 0 ? "md:text-right md:list-inside" : "text-left"}`}
                        >
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
