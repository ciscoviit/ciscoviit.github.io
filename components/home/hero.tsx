"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { raceSport } from "@/app/fonts/fonts";

export function Links() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: false,
            background: {
                color: {
                    value: "#111111",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    // onHover: {
                    //   enable: true,
                    //   mode: "repulse",
                    // },
                },
                modes: {
                    push: {
                        quantity: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#4169e1",
                    distance: 180,
                    enable: true,
                    opacity: 0.5,
                    width: 2,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 120,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="w-full h-screen blur-[1px]"
            />
        );
    }

    return <></>;
}

export default function Hero() {
    return (
        <div className="min-h-screen relative">
            <Links />
            {/* <div className="w-screen h-screen absolute top-0 blur-md bg-black/20">

      </div> */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span
                    className={`text-4xl md:text-8xl font-bold text-center text-white mb-12 sm:ml-0 ${raceSport.className}`}
                >
                    Cisco NetAcad
                </span>
                <span
                    className={`text-4xl font-bold text-center text-white mb-12 ml-4 sm:ml-0 ${raceSport.className}`}
                >
                    {" "}VIIT
                </span>
            </div>
        </div>
    );
}
