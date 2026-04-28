import { useState } from "react";
import { Mail, Send, Copy, Check, X, User, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const CONTACT_EMAIL = "alihamzaarana@gmail.com";
const SITE_FALLBACK = import.meta.env.VITE_SITE_URL || "";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailPopup = ({ isOpen, onClose }: EmailPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy email");
    }
  };

  const sendDirectEmail = () => {
    const subject = encodeURIComponent("Hello from your portfolio!");
    const body = encodeURIComponent(
      `Hi Ali,\n\nI came across your portfolio and would like to connect…`
    );
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
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
        subject: formData.subject,
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

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      onClose();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] glass border-primary/25 shadow-xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary flex items-center justify-center gap-2">
            <Mail className="w-6 h-6" />
            Get in touch
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              onClick={sendDirectEmail}
              variant="outline"
              className="h-12 glass border-primary/25 hover:bg-primary/10 transition-all duration-300 rounded-xl"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send email
            </Button>
            <Button
              type="button"
              onClick={copyEmailToClipboard}
              variant="outline"
              className="h-12 glass border-primary/25 hover:bg-primary/10 transition-all duration-300 rounded-xl"
            >
              {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? "Copied!" : "Copy email"}
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-wide">
              <span className="bg-background px-2 text-muted-foreground">Or send a quick message</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="popup-name" className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Name
                </Label>
                <Input
                  id="popup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="glass border-primary/25 focus:border-primary rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="popup-email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  id="popup-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="glass border-primary/25 focus:border-primary rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="popup-subject" className="text-sm font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Subject
              </Label>
              <Input
                id="popup-subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
                className="glass border-primary/25 focus:border-primary rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="popup-message" className="text-sm font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message
              </Label>
              <Textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project…"
                rows={4}
                required
                className="glass border-primary/25 focus:border-primary resize-none rounded-xl"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 glass border-primary/25 hover:bg-primary/10 rounded-xl"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 gradient-primary hover:shadow-glow transition-all duration-300 rounded-xl shadow-md"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailPopup;
