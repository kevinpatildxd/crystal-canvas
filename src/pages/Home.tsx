import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle2, Package, Shield, Truck, Award } from "lucide-react";
import heroImage from "@/assets/hero-products.jpg";
import { productCategories } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import CategoryCard from "@/components/CategoryCard";
import TestimonialCard from "@/components/TestimonialCard";
import HeroWaves from "@/components/HeroWaves";
import { HeroCarousel } from "@/components/HeroCarousel";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10 text-left">
              <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 rounded-full px-4 py-1 mb-8 opacity-0 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary tracking-wide uppercase">Premium Industrial Packaging</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 opacity-0 animate-fade-up animation-delay-200 tracking-tight">
                Built for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Resilience.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 opacity-0 animate-fade-up animation-delay-400 leading-relaxed">
                Engineered HDPE solutions for the toughest industries.
                We deliver precision, durability, and scale for your packaging needs.
              </p>

              <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-up animation-delay-600">
                <Link to="/products" className="btn-industrial group flex items-center gap-2">
                  Explore Catalog
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 rounded-none border border-primary/20 font-semibold text-primary hover:bg-primary/5 transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-primary" />
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Right Visual - Carousel */}
            <div className="relative lg:h-[80vh] flex items-center justify-center opacity-0 animate-scale-in animation-delay-400">
              <HeroCarousel />
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
        <HeroWaves />
      </section>

      {/* Stats Section - Bento Style */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6 text-primary mb-2" /> },
              { number: "500+", label: "Product SKUs", icon: <Package className="w-6 h-6 text-primary mb-2" /> },
              { number: "1k+", label: "Active Clients", icon: <Shield className="w-6 h-6 text-primary mb-2" /> },
              { number: "50L+", label: "Units/Year", icon: <Truck className="w-6 h-6 text-primary mb-2" /> },
            ].map((stat, index) => (
              <div key={index} className="bento-item text-center group hover:bg-primary/5">
                <div className="flex justify-center">{stat.icon}</div>
                <h3 className="font-display text-4xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {stat.number}
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories - Bento Grid */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Industrial <span className="text-primary">Catalog</span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Precision-engineered containers designed for durability and safety across all sectors.
              </p>
            </div>
            <Link to="/products" className="text-primary hover:text-secondary transition-colors flex items-center gap-2 font-medium">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Split with Glass */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
                Why Industry Leaders <br />
                <span className="text-primary">Trust Us</span>
              </h2>

              <div className="space-y-6">
                {[
                  { title: "ISO Certified", desc: "Manufacturing processes adhering to global standards." },
                  { title: "Food-Grade Materials", desc: "100% virgin HDPE ensuring safety and purity." },
                  { title: "Rapid Prototyping", desc: "From concept to mold in record time." },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-none border border-primary/30 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-10 text-primary border-b border-primary pb-1 hover:text-secondary transition-colors"
              >
                Learn More About Our Process
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Decorative Glass Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="glass rounded-none border-l-4 border-primary p-10 relative z-10">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-6 shadow-lg rotate-45">
                    <span className="text-4xl -rotate-45">🏭</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                    State-of-the-Art
                  </h3>
                  <p className="text-primary font-medium tracking-widest uppercase mb-6">Manufacturing Facility</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Equipped with the latest blow-molding technology to deliver consistent wall thickness and superior finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="glass rounded-xl p-4 md:p-8 border border-primary/10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Precision Manufacturing
                </h2>
                <p className="text-muted-foreground mb-8">
                  Watch how we transform raw high-density polyethylene into premium packaging solutions with automated precision.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-primary/10 bg-white">
                    <h4 className="font-bold text-foreground text-lg">100%</h4>
                    <p className="text-sm text-muted-foreground">Quality Check</p>
                  </div>
                  <div className="p-4 border border-primary/10 bg-white">
                    <h4 className="font-bold text-foreground text-lg">24/7</h4>
                    <p className="text-sm text-muted-foreground">Production</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative aspect-video overflow-hidden bg-muted border border-primary/10 group">
                <img src={heroImage} alt="Manufacturing process" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-primary flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(234,88,12,0.5)]">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trusted by businesses across the nation for reliability and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative glass rounded-none border-l-8 border-primary p-12 md:p-20 text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Ready to Upgrade?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
                Get a custom quote for your bulk packaging needs.
                We deliver quality that protects your brand.
              </p>
              <Link to="/contact" className="btn-industrial inline-flex items-center gap-2 text-lg px-10 py-4">
                Start Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
