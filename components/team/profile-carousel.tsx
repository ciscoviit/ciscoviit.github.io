'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ProfileCard from "./profile-card"
import { type TeamMember } from "./teamData"

interface ProfileCarouselProps {
  teamMembers: TeamMember[]
}

export default function ProfileCarousel({ teamMembers }: ProfileCarouselProps) {
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {teamMembers.map((member, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <ProfileCard {...member} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

