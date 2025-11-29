import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-products.jpg";
import { productCategories } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import CategoryCard from "@/components/CategoryCard";
import TestimonialCard from "@/components/TestimonialCard";
import HeroWaves from "@/components/HeroWaves";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Premium Plastic Packaging</span>
            </div>
            
            {/* Headline */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up animation-delay-200">
              Innovative{" "}
              <span className="text-gradient">Packaging</span>
              <br />
              Solutions
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-400">
              Leading manufacturer of HDPE bottles, jerry cans, and premium plastic containers. 
              Quality that protects, designs that impress.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-600">
              <Link to="/products" className="btn-liquid group">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-2xl font-semibold text-foreground glass-hover flex items-center gap-2"
              >
                <Play className="w-4 h-4 text-primary" />
                Get Quote
              </Link>
            </div>
          </div>
        </div>
        
        {/* Hero Waves */}
        <HeroWaves />
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "500+", label: "Products" },
                { number: "1000+", label: "Happy Clients" },
                { number: "50L+", label: "Units Delivered" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Range
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive solutions for all your packaging needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose{" "}
                <span className="text-gradient">Shree Radheshyam</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                With over 15 years of excellence in plastic manufacturing, we deliver products that 
                meet the highest standards of quality and durability.
              </p>
              
              <div className="space-y-4">
                {[
                  "ISO Certified Manufacturing",
                  "Food-Grade Quality Materials",
                  "Custom Design Solutions",
                  "Competitive Pricing",
                  "On-Time Delivery",
                  "After-Sales Support",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-2 btn-liquid mt-8"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Decorative Glass Card */}
            <div className="relative">
              <div className="glass rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 animate-float">
                    <span className="text-6xl">🏭</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    State-of-the-Art
                  </h3>
                  <p className="text-muted-foreground">Manufacturing Facility</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 animate-float" style={{ animationDelay: "-2s" }}>
                <span className="text-3xl">🧴</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 animate-float" style={{ animationDelay: "-4s" }}>
                <span className="text-3xl">🫙</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  See Our Process
                </h2>
                <p className="text-muted-foreground mb-6">
                  Watch how we transform raw materials into premium packaging solutions 
                  with precision and care.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Quality Control
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Modern Equipment
                  </span>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/50">
                <img src={heroImage} alt="Our manufacturing process" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trusted by businesses across India
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
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Contact us today for a free consultation and quote. Let's create the perfect 
                packaging solution for your business.
              </p>
              <Link to="/contact" className="btn-liquid inline-flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
