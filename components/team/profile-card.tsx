'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Instagram, Plus } from 'lucide-react';

import { type TeamMember } from "./teamData";

interface socialLink {
    icon: JSX.Element
    url?: string
}

export default function ProfileCard({ 
  name, 
  role, 
  imageUrl, 
  githubUrl,
  linkedinUrl,
  email,
  instagramUrl
}: TeamMember) {
  const [isHovered, setIsHovered] = useState(false)

  const socialLinks: socialLink[] = [
    { icon: <Github className="w-6 h-6 text-white" />, url: githubUrl },
    { icon: <Linkedin className="w-6 h-6 text-white" />, url: linkedinUrl },
    { icon: <Mail className="w-6 h-6 text-white" />, url: email ? `mailto:${email}` : undefined },
    { icon: <Instagram className="w-6 h-6 text-white" />, url: instagramUrl },
  ].filter(link => link.url)

  return (
    <Card 
      className="relative w-full max-w-[300px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Profile Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover"
          width={300}
          height={400}
        />
        {/* Overlay with social icons */}
        <div 
          className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {socialLinks.map((link, index) => (
            link?.url ? (<Link 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              {link.icon}
            </Link>) : <></>
          ))}
        </div>
      </div>

      {/* Name and Role */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-semibold text-lg">{name}</h3>
        <p className="text-gray-300 text-sm">{role}</p>
      </div>

      {/* Plus Icon */}
      <div className="absolute bottom-4 right-4">
        <div className={`p-2 rounded-full bg-white transition-transform duration-300
          ${isHovered ? 'rotate-45' : 'rotate-0'}`}
        >
          <Plus className="w-4 h-4 text-black" onClick={() => setIsHovered((isHov) => !isHov)} />
        </div>
      </div>
    </Card>
  )
}
