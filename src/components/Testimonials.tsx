import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ once: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "James Mitchell",
      role: "Product Manager",
      company: "Degree37",
      content:
        "Ali helped shape our blood donor platform—solid multitenant work and Keycloak integration. Clear communication and dependable delivery throughout.",
      rating: 5,
    },
    {
      name: "Tom Anderson",
      role: "Engineering Manager",
      company: "Right Farm",
      content:
        "Strong Node and React contributions as we evolved our agricultural platform. Reusable pieces we still build on today.",
      rating: 4,
    },
    {
      name: "Sarah Patel",
      role: "Lead Developer",
      company: "AlBurraq Technologies",
      content:
        "Pragmatic full stack engineer—comfortable with Redux-heavy UIs and shipping APIs that hold up in production. Great teammate.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-14 ${titleVisible ? "animate-fade-up" : "scroll-hidden"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Client <span className="text-gradient">Feedback</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Notes from teams I've shipped product with
            </p>
          </div>

          <div className="mb-12">
            <div className="glass rounded-2xl p-8 md:p-12 relative border border-border shadow-xl">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/15" />
              <Quote className="absolute bottom-6 right-6 w-12 h-12 text-primary/15 rotate-180" />

              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-foreground mb-8 max-w-3xl leading-relaxed">
                    “{testimonials[activeIndex].content}”
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent p-0.5 shadow-md">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">
                          {testimonials[activeIndex].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">{testimonials[activeIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].role} · {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-primary shadow-sm" : "w-2 bg-muted hover:bg-muted-foreground/40"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 animate-fade-up border border-border shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-4 leading-relaxed">
                  “{testimonial.content}”
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold">{testimonial.name}</h5>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
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

export default Testimonials;
