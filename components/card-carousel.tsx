"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
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
    if (!items || items.length === 0) {
        return null; // or return a placeholder component if preferred
    }

    return (
        <Carousel className={cn("w-full max-w-xs mx-auto", className)}>
            <CarouselContent>
                {items?.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">{renderItem(item, index)}</div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
