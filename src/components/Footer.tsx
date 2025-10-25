import logoNew from "@/assets/logo-new.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <img 
            src={logoNew} 
            alt="The Style Chronicles" 
            className="h-12 w-auto"
          />
          <nav className="flex gap-6 text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </nav>
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} thestylechronicles.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
