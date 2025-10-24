import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <img 
            src={logo} 
            alt="The Style Chronicles" 
            className="h-12 w-auto"
          />
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} thestylechronicles.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
