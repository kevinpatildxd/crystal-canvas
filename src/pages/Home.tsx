import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Package, Shield, Truck, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { productCategories, products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import CategoryCard from "@/components/CategoryCard";
import TestimonialCard from "@/components/TestimonialCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import * as React from "react";

// Hero banner images
const heroBanners = [
  "/hero_slide_1.png",
  "/hero_slide_2.png",
  "/hero_slide_3.png",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  };

  // Auto-play
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section - Fullwidth Banner Carousel */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] flex items-center overflow-hidden">
        {/* Background Image Carousel */}
        {heroBanners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={banner}
              alt={`Hero Banner ${index + 1}`}
              className="w-full h-full object-cover object-center sm:object-bottom"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent sm:from-black/60 sm:via-black/30" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-2.5 sm:px-4 py-1 mb-4 sm:mb-8 opacity-0 animate-fade-up">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] sm:text-sm font-medium text-white tracking-wide uppercase">ISO 9001:2015 Certified</span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-3 sm:mb-6 opacity-0 animate-fade-up animation-delay-200 tracking-tight text-white">
              Premium HDPE <br />
              <span className="text-secondary">Packaging Solutions</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xs sm:max-w-md lg:max-w-lg mb-4 sm:mb-8 opacity-0 animate-fade-up animation-delay-400 leading-relaxed">
              Bottles, Jars & Cans for oils, chemicals, cleaners and industrial applications.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 opacity-0 animate-fade-up animation-delay-600">
              <Link to="/products" className="bg-secondary text-white px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold hover:bg-secondary/90 transition-colors flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border-2 border-white font-semibold text-white hover:bg-white hover:text-primary transition-colors backdrop-blur-sm"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Hidden on mobile, visible from sm up */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/30 transition-colors z-20"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/30 transition-colors z-20"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {heroBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-secondary w-6 sm:w-10' : 'bg-white/50 hover:bg-white/70'
                }`}
            />
          ))}
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Stats Section - Bento Style */}
      <section className="py-12 sm:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { number: "15+", label: "Years Experience", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2" /> },
              { number: "500+", label: "Product SKUs", icon: <Package className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2" /> },
              { number: "1k+", label: "Active Clients", icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2" /> },
              { number: "50L+", label: "Units/Year", icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2" /> },
            ].map((stat, index) => (
              <div key={index} className="bento-item text-center group hover:bg-primary/5 p-4 sm:p-6">
                <div className="flex justify-center">{stat.icon}</div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {stat.number}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories - Bento Grid */}
      <section className="py-12 sm:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
                Industrial <span className="text-primary">Catalog</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                Precision-engineered containers designed for durability and safety across all sectors.
              </p>
            </div>
            <Link to="/products" className="text-sm sm:text-base text-primary hover:text-secondary transition-colors flex items-center gap-2 font-medium">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Split with Glass */}
      <section className="py-12 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8 text-center lg:text-left">
                Why Industry Leaders <br className="hidden sm:block" />
                <span className="text-primary">Trust Us</span>
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { title: "ISO Certified", desc: "Manufacturing processes adhering to global standards." },
                  { title: "Food-Grade Materials", desc: "100% virgin HDPE ensuring safety and purity." },
                  { title: "Rapid Prototyping", desc: "From concept to mold in record time." },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 group items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-none border border-primary/30 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 mt-8 sm:mt-10 text-sm sm:text-base text-primary border-b border-primary pb-1 hover:text-secondary transition-colors"
                >
                  Learn More About Our Process
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Decorative Glass Card */}
            <div className="order-1 lg:order-2 relative mb-8 lg:mb-0">
              <div className="absolute inset-0 bg-primary/20 blur-[60px] sm:blur-[100px] rounded-full" />
              <div className="glass rounded-none border-l-4 border-primary p-6 sm:p-10 relative z-10">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg rotate-45">
                    <span className="text-2xl sm:text-4xl -rotate-45">🏭</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    State-of-the-Art
                  </h3>
                  <p className="text-primary font-medium tracking-widest uppercase mb-4 sm:mb-6 text-xs sm:text-sm">Manufacturing Facility</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Equipped with the latest blow-molding technology to deliver consistent wall thickness and superior finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Carousel */}
      <section className="py-12 sm:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text content - shows first on mobile */}
            <div className="order-1 lg:order-1 text-center lg:text-left">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Our Product <span className="text-primary">Range</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
                Explore our extensive collection of HDPE bottles, jars, and cans designed for various industries.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto lg:mx-0">
                <div className="p-3 sm:p-4 border border-primary/10 bg-white">
                  <h4 className="font-bold text-foreground text-base sm:text-lg">100%</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Quality Assured</p>
                </div>
                <div className="p-3 sm:p-4 border border-primary/10 bg-white">
                  <h4 className="font-bold text-foreground text-base sm:text-lg">100%</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">On-Time Delivery</p>
                </div>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-sm sm:text-base text-primary border-b border-primary pb-1 hover:text-secondary transition-colors font-medium"
              >
                View All Products
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>

            {/* Carousel - shows second on mobile */}
            <div className="order-2 lg:order-2 flex items-center justify-center w-full">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <HeroCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Trusted by businesses across the nation for reliability and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative glass rounded-none border-l-8 border-primary p-8 sm:p-12 md:p-20 text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Ready to Upgrade?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-10">
                Get a custom quote for your bulk packaging needs.
                We deliver quality that protects your brand.
              </p>
              <Link to="/contact" className="btn-industrial inline-flex items-center gap-2 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4">
                Start Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
