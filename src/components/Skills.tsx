const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "Angular",
        "TypeScript",
        "JavaScript ES6+",
        "Redux",
        "Redux Toolkit",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive UI",
        "UI / UX & Design",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "RESTful APIs",
        "GraphQL",
        "JWT & OAuth",
        "Microservices",
        "WebSockets",
        "Cron jobs",
      ],
    },
    {
      title: "UI / UX & Design",
      skills: [
        "Figma",
        "Canva",
        "Google Sites",
        "Wireframing",
        "Design systems",
        "Accessibility basics",
        "Prototyping",
        "Visual hierarchy",
      ],
    },
    {
      title: "AI & Agent Tools",
      skills: [
        "Cursor",
        "Lovable",
        "ChatGPT",
        "GitHub Copilot",
        "Prompt engineering",
        "AI-assisted code review",
        "API integrations for AI features",
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Supabase",
        "SQL",
        "AWS",
        "Heroku",
        "Vercel",
        "Docker basics",
      ],
    },
    {
      title: "Development Tools",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "npm / yarn",
        "Vite",
        "Webpack",
        "ESLint",
        "Chrome DevTools",
        "Agile / Scrum",
      ],
    },
    {
      title: "Additional",
      skills: [
        "Clean code",
        "Code reviews",
        "Performance tuning",
        "Security best practices",
        "Keycloak",
        "Auth0",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Engineering, design collaboration, and AI-accelerated delivery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 animate-slide-up border border-border/90 shadow-sm"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="text-lg font-bold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-sm rounded-full bg-primary/8 text-foreground hover:bg-primary/15 transition-colors duration-200 border border-transparent hover:border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 glass rounded-2xl p-8 md:p-10 animate-slide-up border border-border shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">Core strengths</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">React</div>
                <div className="text-sm text-muted-foreground">Ecosystem</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">Node.js</div>
                <div className="text-sm text-muted-foreground">APIs & services</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">Data</div>
                <div className="text-sm text-muted-foreground">SQL & NoSQL</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">Ship</div>
                <div className="text-sm text-muted-foreground">End-to-end</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
