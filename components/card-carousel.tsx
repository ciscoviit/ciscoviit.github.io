"use client";

import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

interface CardCarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    className?: string;
}

export default function CardCarousel<T>({
    items,
    renderItem,
    className,
}: CardCarouselProps<T>) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    if (!items || items.length === 0) {
        return null; // or return a placeholder component if preferred
    }

    return (
        <div className={cn("relative", className)}>
            <Carousel setApi={setApi} className="w-full max-w-xs mx-auto">
                <CarouselContent>
                    {items.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">{renderItem(item, index)}</div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${current === index ? "bg-[#21ba71]" : "bg-gray-300"}`}
                        onClick={() => api?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}
