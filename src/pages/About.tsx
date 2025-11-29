import { Link } from "react-router-dom";
import { ArrowRight, Award, Target, Eye, Users, Factory, Leaf } from "lucide-react";

const About = () => {
  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Us</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Pioneering plastic packaging solutions since 2008
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Building Trust Through Quality
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Shree Radheshyam Plast was founded with a vision to revolutionize the plastic 
                  packaging industry in India. Starting as a small manufacturing unit in Ahmedabad, 
                  we have grown into one of the leading suppliers of premium plastic containers.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, unwavering commitment to 
                  quality, and a customer-first approach. Today, we serve over 1000 clients across 
                  various industries including pharmaceuticals, chemicals, food & beverages, and 
                  household products.
                </p>
                <p>
                  With state-of-the-art manufacturing facilities and a team of experienced 
                  professionals, we continue to push the boundaries of what's possible in 
                  plastic packaging.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Factory, label: "Modern Facility", value: "50,000 sq ft" },
                { icon: Users, label: "Team Members", value: "100+" },
                { icon: Award, label: "Years Experience", value: "15+" },
                { icon: Leaf, label: "Eco-Friendly", value: "Recyclable" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass-hover rounded-2xl p-6 text-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-display font-bold text-xl text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-hover rounded-3xl p-8 opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide innovative, high-quality plastic packaging solutions that meet the 
                diverse needs of our clients while maintaining the highest standards of 
                manufacturing excellence and customer service.
              </p>
            </div>
            
            <div className="glass-hover rounded-3xl p-8 opacity-0 animate-fade-up animation-delay-200" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted name in plastic packaging by continuously 
                innovating, expanding our product range, and building lasting relationships 
                with our valued customers and partners.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ISO Certified",
                description: "Our manufacturing processes meet international quality standards ensuring consistent product quality.",
                icon: "🏆",
              },
              {
                title: "Food-Grade Materials",
                description: "We use only certified food-grade plastics that are safe for storing food and beverages.",
                icon: "✅",
              },
              {
                title: "Custom Solutions",
                description: "From design to production, we offer fully customized packaging solutions for your unique needs.",
                icon: "⚙️",
              },
              {
                title: "Competitive Pricing",
                description: "Premium quality products at competitive prices without compromising on standards.",
                icon: "💰",
              },
              {
                title: "On-Time Delivery",
                description: "Our efficient logistics ensure your orders are delivered on time, every time.",
                icon: "🚚",
              },
              {
                title: "Expert Support",
                description: "Our dedicated team provides expert guidance and after-sales support for all your needs.",
                icon: "🤝",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-hover rounded-2xl p-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Partner With Us
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Join hundreds of satisfied clients who trust us for their packaging needs.
              </p>
              <Link to="/contact" className="btn-liquid inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
