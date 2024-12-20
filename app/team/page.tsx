import ProfileGrid from "@/components/team/profile-grid";
import { currentTeamMembers } from "@/components/team/teamData";

export default function TeamPage() {
    return (
        <div>
            <div className="h-24"></div>
            {currentTeamMembers.map((team, index) => <ProfileGrid team={team} key={`profile-grid-${index}`}/>)}
        </div>
    );
}
