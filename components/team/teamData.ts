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
}

export const currentTeamMembers: Team[] = [
    {
        teamName: "Core Team",
        members: [
            {
                name: "Shreyas Borade",
                role: "President",
                imageUrl:
                    "https://ciscoviit.in/static/media/Shreyash_Borade.3009dde0ae53b2894d2f.jpg",
                githubUrl: "https://github.com/alexjohnson",
                linkedinUrl: "https://linkedin.com/in/alexjohnson",
                email: "alex@example.com",
                instagramUrl: "https://instagram.com/alexjohnson",
            },
            {
                name: "Pratham Katariya",
                role: "Vice President",
                imageUrl:
                    "https://ciscoviit.in/static/media/Pratham_Katariya.fa3976855d4b1f2f4908.jpg",
                githubUrl: "https://github.com/michaelchen",
                linkedinUrl: "https://linkedin.com/in/michaelchen",
                email: "michael@example.com",
            },
            {
                name: "Abhijeet Shinde",
                role: "Admin Head",
                imageUrl:
                    "https://ciscoviit.in/static/media/Abhijeet_Shinde.dca7e2dad68fe7d07588.jpeg",
                linkedinUrl: "https://linkedin.com/in/samanthalee",
                email: "samantha@example.com",
                instagramUrl: "https://instagram.com/samanthalee",
            },
            {
                name: "Vikas Kolekar",
                role: "Faculty Advisor",
                imageUrl:
                    "https://ciscoviit.in/static/media/Vikas_Kolekar.ed25ea399976780df9ec.jpg",
                githubUrl: "https://github.com/emilyrodriguez",
                linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
                email: "emily@example.com",
            },
            {
                name: "Snehal Wadhane",
                role: "Technical Expert",
                imageUrl:
                    "/team/2024-25/Snehal-Wadhane.jpg",
                linkedinUrl: "https://linkedin.com/in/davidkim",
                instagramUrl: "https://instagram.com/davidkim",
            },
            {
                name: "Yash Pawar",
                role: "Technical Expert",
                imageUrl:
                    "/team/2024-25/Yash-Pawar.jpg",
                linkedinUrl: "https://linkedin.com/in/davidkim",
                instagramUrl: "https://instagram.com/davidkim",
            },
        ],
    },
    {
        teamName: "Technical Team",
        members: [
            {
                name: "Shreyas Borade",
                role: "President",
                imageUrl:
                    "https://ciscoviit.in/static/media/Shreyash_Borade.3009dde0ae53b2894d2f.jpg",
                githubUrl: "https://github.com/alexjohnson",
                linkedinUrl: "https://linkedin.com/in/alexjohnson",
                email: "alex@example.com",
                instagramUrl: "https://instagram.com/alexjohnson",
            },
            {
                name: "Pratham Katariya",
                role: "Vice President",
                imageUrl:
                    "https://ciscoviit.in/static/media/Pratham_Katariya.fa3976855d4b1f2f4908.jpg",
                githubUrl: "https://github.com/michaelchen",
                linkedinUrl: "https://linkedin.com/in/michaelchen",
                email: "michael@example.com",
            },
            {
                name: "Abhijeet Shinde",
                role: "Admin Head",
                imageUrl:
                    "https://ciscoviit.in/static/media/Abhijeet_Shinde.dca7e2dad68fe7d07588.jpeg",
                linkedinUrl: "https://linkedin.com/in/samanthalee",
                email: "samantha@example.com",
                instagramUrl: "https://instagram.com/samanthalee",
            },
            {
                name: "Vikas Kolekar",
                role: "Faculty Advisor",
                imageUrl:
                    "https://ciscoviit.in/static/media/Vikas_Kolekar.ed25ea399976780df9ec.jpg",
                githubUrl: "https://github.com/emilyrodriguez",
                linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
                email: "emily@example.com",
            },
            {
                name: "Snehal Wadhane",
                role: "Technical Team Member",
                imageUrl:
                    "/team/2024-25/Snehal-Wadhane.jpg",
                linkedinUrl: "https://linkedin.com/in/davidkim",
                instagramUrl: "https://instagram.com/davidkim",
            },
            {
                name: "Yash Pawar",
                role: "Technical Team Member",
                imageUrl:
                    "/team/2024-25/Yash-Pawar.jpg",
                linkedinUrl: "https://linkedin.com/in/davidkim",
                instagramUrl: "https://instagram.com/davidkim",
            },
        ],
    },
];
