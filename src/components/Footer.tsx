const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-muted-foreground">© {currentYear} Ali Hamza. Built with React & Tailwind.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
