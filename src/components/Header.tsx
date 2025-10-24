import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/start-here", label: "START HERE" },
    { path: "/articles", label: "ARTICLES" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link to="/" className="block text-center mb-6">
          <h1 className="text-5xl font-serif italic text-primary">
            The <span className="text-6xl">Style</span> Chronicles
          </h1>
        </Link>

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
          <button className="hover:text-primary transition-colors text-muted-foreground">
            <Search className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
