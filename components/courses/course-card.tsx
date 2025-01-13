import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { type Course } from "@/components/courses/courseData";

export default function CourseCard({
    thumbnailUrl,
    name,
    duration,
    description,
    redirectUrl,
}: Course) {
    return (
        <div className="w-full h-[450px] max-w-md">
            <Card className="overflow-hidden bg-zinc-900 text-white border-zinc-800 h-full flex flex-col">
                {/* Thumbnail */}
                <div className="relative w-full aspect-[2/1] flex">
                    <Image
                        src={thumbnailUrl}
                        alt="Course thumbnail"
                        fill
                        className="object-cover bg-[#006272]"
                    />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                    <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-2">{name}</h4>
                        <p className="text-sm text-zinc-400 mb-2">{duration}</p>
                        <p className="text-sm text-zinc-300">{description}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                        <Link href={redirectUrl} className="w-full">
                            <Button
                                variant="default"
                                className="bg-[#1a2736] hover:bg-[#243242] text-white border-none w-full"
                            >
                                Read More
                            </Button>
                        </Link>
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
}
