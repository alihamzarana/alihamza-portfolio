import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Education <span className="text-gradient">Background</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Academic foundation in computer science
            </p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-10 hover:shadow-glow transition-all duration-300 animate-slide-up border border-border shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-md">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
                <div className="text-lg text-primary font-medium mb-3">
                  Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST), Islamabad
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>2016 – 2020</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>Islamabad, Pakistan</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Four-year program covering software engineering, algorithms, data structures, databases,
                  networks, and systems—forming the base for full stack and product development work.
                </p>
                <div>
                  <h4 className="font-semibold mb-3">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Software engineering",
                      "Data structures & algorithms",
                      "Database systems",
                      "Web development",
                      "Computer networks",
                      "Object-oriented design",
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-foreground border border-primary/15"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
