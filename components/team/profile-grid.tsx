"use client";
import ProfileCard from "./profile-card";
import { exwayer } from "@/app/fonts/fonts";
import { motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";
import { type Team } from "./teamData";
import ProfileCarousel from "./profile-carousel";

export default function ProfileGrid({ team }: { team: Team }) {
    const { teamName, members } = team;
    const isMobile = useIsMobile();

    return (
        <div className="bg-base-300 py-16">
            <div className="container mx-auto px-4 relative">
                <h1
                    className={`text-5xl md:text-6xl lg:text-8xl ${exwayer.className} text-white mb-12 ml-4 sm:ml-0`}
                >
                    {teamName}
                </h1>
                {isMobile ? (
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
                            delay:  0.1,
                        }}
                        key={teamName.replace(" ", "-")}
                        className="flex justify-center"
                    >
                    <ProfileCarousel teamMembers={members} />
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {members.map((member, index) => (
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
                                    delay: index * 0.1,
                                }}
                                key={`${teamName.replace(" ", "-")}-${index}`}
                                className="flex justify-center"
                            >
                                {/* <div key={index} className="flex justify-center"> */}
                                <ProfileCard {...member} />
                                {/* </div> */}
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
