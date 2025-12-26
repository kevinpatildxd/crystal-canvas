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

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function HeroCarousel() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    // Shuffle products once on component mount
    const shuffledProducts = React.useMemo(() => shuffleArray(products), []);

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
                    {shuffledProducts.map((product, index) => (
                        <CarouselItem key={product.id}>
                            <div className="p-1">
                                <div className="relative aspect-square overflow-hidden rounded-2xl glass p-2 rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="rounded-xl w-full h-full object-contain shadow-2xl"
                                        style={{ backgroundColor: '#1e3b8a' }}
                                    />

                                    {/* Floating Badge Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border-l-4 border-primary backdrop-blur-md bg-white/30 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-primary-foreground/80 uppercase tracking-wider font-semibold">{product.capacity}</p>
                                                <p className="font-bold text-foreground">{product.name}</p>
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

            {/* Pagination Dots - showing first 10 dots to avoid overflow */}
            <div className="flex justify-center gap-2 mt-8">
                {shuffledProducts.slice(0, 10).map((_, index) => (
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
