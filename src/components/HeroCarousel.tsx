import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

// Hero slides with fullscreen HDPE product banners
const heroSlides = [
    {
        id: "hero-1",
        image: "/hero_slide_1.png",
        title: "Premium HDPE Packaging Solutions",
        subtitle: "High-Quality Bottles, Jars & Cans for Every Industry",
    },
    {
        id: "hero-2",
        image: "/hero_slide_2.png",
        title: "Custom Color Options",
        subtitle: "Available in Blue, Yellow & White",
    },
    {
        id: "hero-3",
        image: "/hero_slide_3.png",
        title: "Complete Packaging Collection",
        subtitle: "Detergent, Pump & Spray Bottles",
    },
];

export function HeroCarousel() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    // Auto-play effect - 5 second interval
    React.useEffect(() => {
        if (!api) return;

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [api]);

    return (
        <div className="w-full relative group">
            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {heroSlides.map((slide) => (
                        <CarouselItem key={slide.id}>
                            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
                                {/* Background Image */}
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />

                                {/* Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                                {/* Text Content Overlay */}
                                <div className="absolute inset-0 flex items-center">
                                    <div className="container mx-auto px-6 sm:px-8 lg:px-16">
                                        <div className="max-w-2xl">
                                            <p className="text-primary text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider mb-2 sm:mb-4 animate-fade-in">
                                                {slide.subtitle}
                                            </p>
                                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                                                {slide.title}
                                            </h1>
                                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                                <a
                                                    href="/products"
                                                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                                                >
                                                    Explore Products
                                                </a>
                                                <a
                                                    href="/contact"
                                                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
                                                >
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Arrows */}
                <CarouselPrevious className="left-4 sm:left-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white transition-all h-10 w-10 sm:h-12 sm:w-12" />
                <CarouselNext className="right-4 sm:right-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white transition-all h-10 w-10 sm:h-12 sm:w-12" />
            </Carousel>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 sm:gap-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${index === current - 1
                                ? "bg-primary w-6 sm:w-8"
                                : "bg-white/50 hover:bg-white/70 w-2 sm:w-3"
                            }`}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

