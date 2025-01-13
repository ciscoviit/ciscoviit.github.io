"use client";
import { currentTeamMembers } from "@/components/team/teamData";
import CardGrid from "@/components/card-grid";
import ProfileCard from "@/components/team/profile-card";

export default function Teams() {
    return (
        <>
            {currentTeamMembers.map((team, index) => (
                <CardGrid
                    title={team.teamName}
                    items={team.members}
                    renderItem={(member, index) => <ProfileCard {...member} key={`${index}-${team.teamName}`}/>}
                    key={`profile-grid-${index}`}
                />
            ))}
        </>
    );
}
