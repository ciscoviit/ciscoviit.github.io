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
        teamName: "Technical Team",
        members: [
            {
                name: "Chinmayee Mali",
                role: "Technical Head",
                imageUrl: "/team/2024-25/tech/Chinmayee_Mali.jpg",
                linkedinUrl:
                    "https://www.linkedin.com/in/chinmayee-mali-27643a258/",
            },
            {
                name: "Soham Deshmukh",
                role: "Technical Head",
                imageUrl: "/team/2024-25/tech/Soham_Deshmukh.jpg",
                linkedinUrl:
                    "https://www.linkedin.com/in/soham-deshmukh-214b6225a/",
            },
            {
                name: "Yash Pawar",
                role: "Technical Team Member",
                imageUrl: "/team/2024-25/tech/Yash_Pawar.jpg",
                linkedinUrl: "https://www.linkedin.com/in/yashppawar",
                githubUrl: "https://www.github.com/yashppawar",
            },
            {
                name: "Snehal Wadhane",
                role: "Technical Team Member",
                imageUrl: "/team/2024-25/tech/Snehal_Wadhane.jpg",
                linkedinUrl: "https://www.linkedin.com/in/snehalwadhane/",
                githubUrl: "https://github.com/snehal-wadhane",
            },
            {
                name: "Prema Dongare",
                role: "Technical Team Member",
                imageUrl: "/team/2024-25/tech/Prema_Dongare.jpg",
                linkedinUrl:
                    "https://www.linkedin.com/in/prema-dongare-818330246/",
            },
            {
                name: "Rishi Mothwani",
                role: "Technical Team Member",
                imageUrl: "/team/2024-25/tech/Rishi_Mothwani.jpg",
            },
            {
                name: "Swaraj Pawar",
                role: "Technical Team Member",
                imageUrl: "/team/2024-25/tech/Swaraj_Pawar.jpg",
                linkedinUrl: "https://www.linkedin.com/in/swaraj-pawar12/",
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
    {
        teamName: "Finance Team",
        members: [
            {
                name: "Ayush Chorage",
                role: "Finance Head",
                imageUrl: "/team/2024-25/finance/Ayush_Chorage.jpg",
            },
            {
                name: "Vinit Thate",
                role: "Finance Team Member",
                imageUrl: "/team/2024-25/finance/Vinit_Thate.jpg",
            },
            {
                name: "Vivek Bhange",
                role: "Finance Team Member",
                imageUrl: "/team/2024-25/finance/Vivek_Bhange.jpg",
            },
        ],
    },
    {
        teamName: "Media & Content Team",
        members: [
            {
                name: "Sarvesh Shastri",
                role: "Media and Content Head",
                imageUrl: "/team/2024-25/media/Sarvesh_Shastri.jpg",
            },
            {
                name: "Saurav Guddumwar",
                role: "Media and Content Head",
                imageUrl: "/team/2024-25/media/Saurav_Guddumwar.jpg",
            },
            {
                name: "Aditya Kale",
                role: "Media and Content Team Member",
                imageUrl: "/team/2024-25/media/Aditya_Kale.jpg",
            },
            {
                name: "Hassan Khan",
                role: "Media and Content Team Member",
                imageUrl: "/team/2024-25/media/Hassan_Khan.jpg",
            },

            {
                name: "Vinnet Unde",
                role: "Media and Content Team Member",
                imageUrl: "/team/2024-25/media/Vinnet_Unde.jpg",
            },
        ],
    },
    {
        teamName: "Publicity Team",
        members: [
            {
                name: "Kapil Murge",
                role: "Publicity Head",
                imageUrl: "/team/2024-25/publicity/Kapil_Murge.jpg",
            },
            {
                name: "Deep Meshram",
                role: "Publicity Head",
                imageUrl: "/team/2024-25/publicity/Deep_Meshram.jpg",
            },
            {
                name: "Arnav Kulkarni",
                role: "Publicity Team Member",
                imageUrl: "/team/2024-25/publicity/Arnav_Kulkarni.jpg",
            },
            {
                name: "Aryan Tembhurne",
                role: "Publicity Team Member",
                imageUrl: "/team/2024-25/publicity/Aryan_Tembhurne.jpg",
            },
            {
                name: "Ebrahim Bootwala",
                role: "Publicity Team Member",
                imageUrl: "/team/2024-25/publicity/Ebrahim_Bootwala.jpg",
            },
            {
                name: "Jiya Sharma",
                role: "Publicity Team Member",
                imageUrl: "/team/2024-25/publicity/Jiya_Sharma.jpg",
            },
            {
                name: "Pratiksha Bhagat",
                role: "Publicity Team Member",
                imageUrl: "/team/2024-25/publicity/Pratiksha_Bhagat.jpg",
            },
            {
                name: "Safir Sayyad",
                role: "Publicity Team Member",
                imageUrl: "/team/2024-25/publicity/Safir_Sayyad.jpg",
            },
        ],
    },
];
