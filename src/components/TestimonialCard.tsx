import { Testimonial } from "@/types/testimonial";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bento-item h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-10 h-10 text-primary/30" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating
                ? "text-primary fill-primary"
                : "text-muted-foreground"
              }`}
          />
        ))}
      </div>

      {/* Message */}
      <p className="text-foreground/80 flex-grow mb-6 leading-relaxed">
        "{testimonial.message}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/30">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-foreground">
            {testimonial.name}
          </h4>
          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
