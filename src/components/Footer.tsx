const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} thestylechronicles.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
