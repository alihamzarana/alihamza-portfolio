import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { storeContactInDatabase } from "@/utils/database";

const CONTACT_EMAIL = "alihamzaarana@gmail.com";
const SITE_FALLBACK = import.meta.env.VITE_SITE_URL || "";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "Contact from Portfolio",
        message: formData.message,
        reply_to: formData.email,
        timestamp: new Date().toLocaleString(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      const receiptParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: "Ali Hamza",
        from_email: CONTACT_EMAIL,
        subject: formData.subject || "Contact from Portfolio",
        message: formData.message,
        site_url: SITE_FALLBACK,
        reply_to: CONTACT_EMAIL,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_RECEIPT,
        receiptParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await storeContactInDatabase({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Contact from Portfolio",
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch {
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tell me about your project or role—I'll respond as soon as I can.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="glass rounded-2xl p-8 animate-slide-up border border-border shadow-lg">
              <h3 className="text-xl font-bold mb-8">Get in touch</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/15"
                >
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center group-hover:shadow-md transition-all shadow-sm">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground break-all">{CONTACT_EMAIL}</div>
                  </div>
                </a>

                <a
                  href="tel:+923009076710"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/15"
                >
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center group-hover:shadow-md transition-all shadow-sm">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="text-foreground">+92 300 9076710</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="text-foreground">Lahore, Pakistan</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-sm text-muted-foreground mb-4">Social</div>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/ali71"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/10 transition-colors border border-border shadow-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/alihamzarana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/10 transition-colors border border-border shadow-sm"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 animate-slide-up border border-border shadow-lg">
              <h3 className="text-xl font-bold mb-8">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject (optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Project details, timeline, or role…"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3.5 gradient-primary text-primary-foreground rounded-xl font-medium hover:shadow-glow transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-md"
                >
                  <Send size={18} />
                  {isLoading ? "Sending…" : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
