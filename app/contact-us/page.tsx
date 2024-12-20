"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            toast.success(JSON.stringify(data, null, 2));
            reset();
        } catch {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-base-300 dark relative min-h-screen text-white p-2 md:p-6">
            {/* <div className="h-24"></div> */}
            <div className="max-w-6xl w-full p-3 md:p-8 mx-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold mb-4">
                                Get in Touch
                            </h1>
                            <p className="text-gray-400">
                                Reach out to us for questions, collabs, or just
                                to say &apos;You guys are great&apos;
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    {...register("name")}
                                    aria-describedby="name-error"
                                    className="text-white bg-base-100"
                                />
                                {errors.name && (
                                    <p
                                        className="text-sm text-red-400"
                                        id="name-error"
                                    >
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register("email")}
                                    aria-describedby="email-error"
                                    className="text-white bg-base-100"
                                />
                                {errors.email && (
                                    <p
                                        className="text-sm text-red-400"
                                        id="email-error"
                                    >
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Type your message here"
                                    {...register("message")}
                                    aria-describedby="message-error"
                                    className="min-h-[150px] bg-base-100 text-white"
                                />
                                {errors.message && (
                                    <p
                                        className="text-sm text-red-400"
                                        id="message-error"
                                    >
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>

                    <div className="hidden lg:flex justify-center items-center">
                        <Image
                            src="/cat-laptop.gif"
                            alt="Cute mascot animation"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
