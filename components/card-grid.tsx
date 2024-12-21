"use client";
import { ReactNode } from "react";
import { exwayer } from "@/app/fonts/fonts";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import CardCarousel from "@/components/card-carousel";

interface CardGridProps<T> {
    title: string;
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    className?: string;
}

export default function CardGrid<T>({
    title,
    items,
    renderItem,
    className,
}: CardGridProps<T>) {
    const isMobile = useIsMobile();

    return (
        <div className={cn("bg-base-300 py-16", className)}>
            <div className="container mx-auto px-4 relative">
                <h1
                    className={`text-5xl md:text-6xl lg:text-8xl ${exwayer.className} text-white mb-12 ml-4 sm:ml-0`}
                >
                    {title}
                </h1>
                {isMobile ? (
                    <BlurReveal key={title.replace(" ", "-")}>
                        <CardCarousel items={items} renderItem={renderItem} />
                    </BlurReveal>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {items?.map((member, index) => (
                            <BlurReveal
                                delayMultiplier={index}
                                key={`${title.replace(" ", "-")}-${index}`}
                            >
                                {renderItem(member, index)}
                            </BlurReveal>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function BlurReveal({
    children,
    delayMultiplier = 1,
}: {
    children: ReactNode;
    delayMultiplier?: number;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 50,
                scale: 0.9,
            }}
            whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: delayMultiplier * 0.1,
            }}
            className="flex justify-center"
        >
            {children}
        </motion.div>
    );
}
