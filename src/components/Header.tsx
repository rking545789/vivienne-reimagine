import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";
import logoNew from "@/assets/logo-new.png";
import SearchDialog from "@/components/SearchDialog";

const Header = () => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/start-here", label: "START HERE" },
    { path: "/articles", label: "ARTICLES" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      <header className="border-b border-border bg-background sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logoNew} 
                alt="The Style Chronicles" 
                className="h-16"
              />
            </Link>
            <Link to="/" className="flex-1 flex justify-center">
              <img 
                src={logoNew} 
                alt="The Style Chronicles" 
                className="h-16"
              />
            </Link>
            <div className="w-16 flex-shrink-0"></div>
          </div>

          <nav className="flex items-center justify-center gap-8 text-sm tracking-wider">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-primary transition-colors ${
                  location.pathname === item.path ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={() => setSearchOpen(true)}
              className="hover:text-primary transition-colors text-muted-foreground"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </header>
      
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default Header;
