
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import GlassMorphism from "./GlassMorphism";
import AnimatedContainer from "./AnimatedContainer";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <GlassMorphism 
        className={cn(
          "container mx-auto px-4 flex items-center justify-between rounded-full",
          isScrolled ? "shadow-lg" : ""
        )}
      >
        <AnimatedContainer animation="slide-down">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">ContentShield</span>
          </Link>
        </AnimatedContainer>

        {/* Desktop Navigation */}
        <AnimatedContainer 
          animation="slide-down" 
          delay={100}
          className="hidden md:flex items-center gap-8"
        >
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "nav-link",
                  location.pathname === link.path && "nav-link-active"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link 
            to="/login" 
            className="btn-primary flex items-center gap-2"
          >
            <LogIn className="h-4 w-4" />
            <span>Sign In</span>
          </Link>
        </AnimatedContainer>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </GlassMorphism>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <GlassMorphism className="fixed inset-x-0 top-[72px] p-6 md:hidden">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "py-2 text-lg",
                  location.pathname === link.path ? "text-primary font-medium" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link 
            to="/login" 
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <LogIn className="h-4 w-4" />
            <span>Sign In</span>
          </Link>
        </GlassMorphism>
      )}
    </header>
  );
}
