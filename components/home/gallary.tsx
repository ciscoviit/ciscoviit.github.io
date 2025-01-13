import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const images = [
    "/lab-1.jpg",
    "/lab-2.jpg",
    "/lab-3.jpg",
    "/full-team.jpg",
    "/lab-training.jpg",
    "/team-bonding.jpg",
];

function ImageCard({ src, className }: { src: string; className?: string }) {
    return (
        <figure
            className={cn(
                "relative w-72 h-48 sm:w-96 sm:h-64 lg:w-[600px] lg:h-96 cursor-pointer overflow-hidden rounded-xl border",
                "border-gray-950/[.1] bg-gray-950/[.01]",
                className
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    alt="showcase"
                    src={src}
                    className="w-full h-full object-cover"
                    height={400}
                    width={600}
                />
            </div>
        </figure>
    );
}

export default function Gallary() {
    return (
        <main className="px-4 sm:px-8 lg:px-16 py-8 pb-20 ">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Gallary
            </div>
            <p className="w-full sm:w-3/4 lg:w-2/3 mt-2 opacity-60 text-xs sm:text-base">
                here are some pictures from the events we had
            </p>

            <div className="pt-6 sm:pt-8 lg:pt-10">
                <div className="relative w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {images.map((img) => (
                            <ImageCard key={img} src={img} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-base-300 "></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-base-300"></div>
                </div>
            </div>
        </main>
    );
}
