import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full border border-primary/10 ${scrolled ? "glass py-2 shadow-2xl bg-white/80 backdrop-blur-xl" : "py-3 bg-white/50 backdrop-blur-md"
        }`}
    >
      <div className="px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-bold text-lg">SR</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg text-foreground tracking-tight">
                Shree Radheshyam
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/10 rounded-full px-2 py-1 border border-primary/5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                  ? "text-primary-foreground bg-primary shadow-lg"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex btn-industrial text-sm py-2 px-6 rounded-full"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 glass rounded-3xl p-4 animate-fade-up border border-primary/10 mx-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all ${location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 btn-industrial text-center text-sm py-3 rounded-xl w-full"
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
