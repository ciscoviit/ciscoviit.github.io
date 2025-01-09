"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
// import ThemeToggle from "./theme-toggle";

import logo from "@/public/logo.png";

const links: {
    name: string;
    link: string;
}[] = [
    {
        name: "Courses",
        link: "/courses",
    },
    {
        name: "Team",
        link: "/team",
    },
    // {
    //     name: "Contact Us",
    //     link: "/contact-us",
    // },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={cn(
                "fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl rounded-[32px] transition-all duration-300 z-50 bg-primary-content/50 backdrop-blur-md shadow-lg px-5 ease-in-out"
            )}
            ref={menuRef}
        >
            <div className="container px-1 py-3 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-2xl font-bold text-white flex items-center translate-y-0.5"
                >
                    <Image
                        src={logo}
                        alt="netacad viit"
                        width={32}
                        height={32}
                        className="mr-2"
                        priority
                    />{" "}
                    <span>NetAcad</span>
                </Link>
                <div className="flex items-center space-x-6">
                    {links.map((link) => (
                        <NavLink
                            href={link.link}
                            key={link.name}
                            className="hidden md:inline-block"
                            onClick={handleLinkClick}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-white btn-ghost"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="size-8" />
                        ) : (
                            <Menu className="size-8" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>

            {isMenuOpen && (
                <div>
                    <Separator className="bg-secondary" />
                    <div className="md:hidden px-6 pb-4 pt-2">
                        {links.map((link) => (
                            <NavLink
                                href={link.link}
                                key={link.name}
                                className={cn("block py-2")}
                                onClick={handleLinkClick}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({
    href,
    children,
    className,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            className={cn(
                "text-sm font-medium text-white hover:text-teal-500 group transition-all duration-300 ease-in-out",
                className
            )}
            onClick={onClick}
        >
            <div className="bg-left-bottom bg-gradient-to-r from-teal-500 to-teal-500 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                {children}
            </div>
        </Link>
    );
}
