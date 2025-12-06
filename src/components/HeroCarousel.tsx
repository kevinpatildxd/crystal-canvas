import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-products.jpg";

const images = [
    {
        src: heroImage,
        alt: "Industrial Packaging Solutions",
        title: "Premium Quality",
        desc: "ISO 9001:2015 Certified"
    },
    {
        src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop",
        alt: "HDPE Bottles",
        title: "Diverse Range",
        desc: "Bottles, Jars & Cans"
    },
    {
        src: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=1000&auto=format&fit=crop",
        alt: "Manufacturing Process",
        title: "Advanced Tech",
        desc: "Precision Blow Molding"
    }
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

    // Auto-play effect
    React.useEffect(() => {
        if (!api) return;

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 4000);

        return () => clearInterval(intervalId);
    }, [api]);

    return (
        <div className="w-full max-w-lg mx-auto relative group">
            {/* Abstract Shapes Background - kept from original design */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-pulse -z-10" />

            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <div className="relative aspect-square overflow-hidden rounded-2xl glass p-2 rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="rounded-xl w-full h-full object-cover shadow-2xl"
                                    />

                                    {/* Floating Badge Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border-l-4 border-primary backdrop-blur-md bg-white/30 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-primary-foreground/80 uppercase tracking-wider font-semibold">{image.title}</p>
                                                <p className="font-bold text-foreground">{image.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden group-hover:flex -left-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-white transition-all" />
                <CarouselNext className="hidden group-hover:flex -right-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-white transition-all" />
            </Carousel>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current - 1
                                ? "bg-primary w-6"
                                : "bg-primary/20 hover:bg-primary/40"
                            }`}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
