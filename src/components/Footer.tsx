import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { productCategories } from "@/data/products";

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="glass pt-32 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Shree Radheshyam Plast"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leading manufacturer of premium plastic packaging solutions. Quality you can trust, service you deserve.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-2">
                {productCategories.slice(0, 6).map((category) => (
                  <li key={category.id}>
                    <Link
                      to={`/products?category=${category.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Ground Floor, 45, Laxmannagar Ind Estate, Kamrej Road, Laskana Navagam, Surat - 394185, Gujarat, India
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+919978504042"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    +91 99785 04042
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=babycatalyst.kevin@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    babycatalyst.kevin@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shree Radheshyam Plast. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground/60">Made with ♥ in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
