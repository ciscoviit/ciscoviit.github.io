export type TeamMember = {
    name: string;
    role: string;
    imageUrl: string;
    githubUrl?: string;
    linkedinUrl?: string;
    email?: string;
    instagramUrl?: string;
};

export type Team = {
    teamName: string;
    members: TeamMember[];
};

export const currentTeamMembers: Team[] = [
    {
        teamName: "NetAcad Team",
        members: [
            {
                name: "Vikas Kolekar",
                role: "Faculty Advisor",
                imageUrl: "/team/2024-25/vikas_kolekar.jpg",
                linkedinUrl: "https://in.linkedin.com/in/vikas-kolekar",
            },
            {
                name: "Nitin Sakhre",
                role: "Faculty Advisor",
                imageUrl: "/team/2024-25/nitin_sakhare.jpg",
                linkedinUrl:
                    "https://www.linkedin.com/in/nitin-sakhare-b2485383",
            },
            {
                name: "Shreyash Borade",
                role: "President",
                imageUrl: "/team/2024-25/shreyash_president.jpg",
                linkedinUrl:
                    "https://www.linkedin.com/in/shreyash-borade-a986a3256/",
            },
            {
                name: "Pratham Katariya",
                role: "Vice President",
                imageUrl: "/team/2024-25/Pratham_Vp.jpg",
                linkedinUrl:
                    "https://www.linkedin.com/in/pratham-katariya-3aa1b3322/",
            },
            {
                name: "Sakshi Hedke",
                role: "Vice President",
                imageUrl: "/team/2024-25/Sakshi_Vp.jpg",
                linkedinUrl:
                    "https://www.linkedin.com/in/sakshi-hedke-44975b25b/",
            },
        ],
    },
    {
        teamName: "Design Team",
        members: [
            {
                name: "Avanti Savji",
                role: "Design Head",
                imageUrl: "/team/2024-25/design/Avanti_designHead.jpg",
            },
            {
                name: "Aishwarya Meshram",
                role: "Design Head",
                imageUrl: "/team/2024-25/design/Aishwarya_Meshram.jpg",
            },
            {
                name: "Nishchay Kshirsagar",
                role: "Design Team Member",
                imageUrl: "/team/2024-25/design/Nishchay_designTeam.jpg",
            },
            {
                name: "Radhika Thale",
                role: "Design Team Member",
                imageUrl: "/team/2024-25/design/Radhika_designTeam.jpg",
            },
            {
                name: "Pranita Bhor",
                role: "Design Team Member",
                imageUrl: "/team/2024-25/design/Pranita_designTeam.jpg",
            },
            {
                name: "Yash Gavali",
                role: "Design Team Member",
                imageUrl: "/team/2024-25/design/Yahs_design.jpg",
            },
            {
                name: "Gayatri Gulbhele",
                role: "Design Team Member",
                imageUrl: "/team/2024-25/design/GayatriG_design.jpg",
            },
            {
                name: "Gayatri Pawar",
                role: "Design Team Member",
                imageUrl: "/team/2024-25/design/GayatriP_designTeam.jpg",
            },
            {
                name: "Atharv Kadam",
                role: "Design Team Member",
                imageUrl: "/team/2024-25/design/Atharva_design.jpg",
            },
        ],
    },
];
