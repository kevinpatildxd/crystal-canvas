import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { products } from "@/data/products";

export function HeroCarousel() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [slides, setSlides] = React.useState<typeof products>([]);

    React.useEffect(() => {
        // Randomly select 5 products
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        setSlides(shuffled.slice(0, 5));
    }, []);

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

    if (slides.length === 0) return null;

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
                    {slides.map((product) => (
                        <CarouselItem key={product.id}>
                            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-secondary/20">
                                {/* Background Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute inset-0 w-full h-full object-contain object-center p-8 sm:p-16"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Arrows */}
                <CarouselPrevious className="left-4 sm:left-8 bg-secondary/80 backdrop-blur-sm border-border text-foreground hover:bg-secondary hover:text-primary transition-all h-10 w-10 sm:h-12 sm:w-12" />
                <CarouselNext className="right-4 sm:right-8 bg-secondary/80 backdrop-blur-sm border-border text-foreground hover:bg-secondary hover:text-primary transition-all h-10 w-10 sm:h-12 sm:w-12" />
            </Carousel>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 sm:gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${index === current - 1
                            ? "bg-primary w-6 sm:w-8"
                            : "bg-primary/20 hover:bg-primary/40 w-2 sm:w-3"
                            }`}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
