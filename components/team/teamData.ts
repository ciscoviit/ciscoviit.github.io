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
        teamName: "Admin Team",
        members: [
            {
                name: "Abhijeet Shinde",
                role: "Administration Head",
                imageUrl: "/team/2024-25/Admin team/Abhijeet Shinde.jpg",
            },
            {
                name: "Chirangi Gupta",
                role: "Administration Head",
                imageUrl: "/team/2024-25/Admin team/Chirangi_AdminHead.jpg",
            },
            {
                name: "Shreeraj Wabale",
                role: "Administration Team",
                imageUrl: "/team/2024-25/Admin team/Shreeraj wabale.jpg",
            },
            {
                name: "Parth Mahadik",
                role: "Administration Team",
                imageUrl: "/team/2024-25/Admin team/Parth mahadik.jpg",
            },
            {
                name: "Shreya Patil",
                role: "Administration Team",
                imageUrl: "/team/2024-25/Admin team/Shreyapatil.jpg",
            },
            {
                name: "Vaibhav Singh",
                role: "Administration Team",
                imageUrl: "/team/2024-25/Admin team/Vaibhav singh.jpg",
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
                linkedinUrl:
                    "https://in.linkedin.com/in/rishi-motwani-6a5883309",
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
        teamName: "Activity Team",
        members: [
            {
                name: "Arya Patil",
                role: "Activity Head",
                imageUrl: "/team/2024-25/Activity team/arya Patil.jpg",
            },
            {
                name: "Ishika Bhad",
                role: "Activity Team",
                imageUrl: "/team/2024-25/Activity team/Ishika Bhad.jpg",
            },
            {
                name: "Rituja Malode",
                role: "Activity Team",
                imageUrl: "/team/2024-25/Activity team/Rituja Malode.jpg",
            },
            {
                name: "Shradhha Salve",
                role: "Activity Team",
                imageUrl: "/team/2024-25/Activity team/SHRADDHA SALVE.jpg",
            },
            {
                name: "Dishant Yele",
                role: "Activity Team",
                imageUrl: "/team/2024-25/Activity team/Dishant_Yele.jpg",
            },
            {
                name: "Aditya Bhosale",
                role: "Activity Team",
                imageUrl: "/team/2024-25/Activity team/Aditya Bhosale.jpg",
            },
            {
                name: "Milind Borse",
                role: "Activity Team",
                imageUrl: "/team/2024-25/Activity team/Milind Borse.jpg",
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
                imageUrl: "/team/2024-25/design/GayatriG.jpg",
            },
            {
                name: "Gayatri Pawar",
                role: "Design Team Member",
                imageUrl: "/team/2024-25/design/GayatriP.jpg",
            },
            {
                name: "Atharv Kadam",
                role: "Design Team Member",
                imageUrl: "/team/2024-25/design/Atharva_design.jpg",
            },
        ],
    },
    {
        teamName: "Department Team",
        members: [
            {
                name: "Ishwari More",
                role: "AIDS Departhemt Team Head",
                imageUrl: "/team/2024-25/Dept/Ishwari_departmentHead.jpg",
            },
            {
                name: "Abhishek Pingale",
                role: "AIML Department Team Head",
                imageUrl: "/team/2024-25/Dept/aiml-head.png",
            },
            {
                name: "Prathmesh Phatake",
                role: "CE Department Head",
                imageUrl: "/team/2024-25/Dept/Prathamesh_DepartmentHead.jpg",
            },
            {
                name: "Shreyanshi Meshram",
                role: "ENTC Department Team Head",
                imageUrl:
                    "/team/2024-25/Dept/CISCO - C_32_SHREYANSHI_MESHRAM.jpg",
            },
            {
                name: "Prasad Kulkarni",
                role: "IT Department Team Head",
                imageUrl:
                    "/team/2024-25/Dept/PrasadKulkarni.jpg",
            },
            {
                name: "Shivam Devikar",
                role: "AIDS Department Team Member",
                imageUrl: "/team/2024-25/Dept/Shivam_AIDS_departmentTeam.jpg",
            },
            {
                name: "Sumant Bobade",
                role: "AIDS Department Team Member",
                imageUrl:
                    "/team/2024-25/Dept/Sumant_AIDS_Department_team.jpg",
            },
            {
                name: "Swanandi Kamat",
                role: "CE Department Team Member",
                imageUrl:
                    "/team/2024-25/Dept/IMG_20240721_134957 - 16_SWANANDI KAMAT.jpg",
            },
            {
                name: "Nilakashi Baviskar",
                role: "CE Department Team Member",
                imageUrl:
                    "/team/2024-25/Dept/IMG_20241004_221507 - NILAKSHI BAVISKAR.jpg",
            },
            {
                name: "Hrishikesh Wakode",
                role: "CE Department Team Member",
                imageUrl:
                    "/team/2024-25/Dept/Hrishikesh.jpg",
            },
            {
                name: "Rugved Dani",
                role: "CE Departhemt Team Member",
                imageUrl:
                    "/team/2024-25/Dept/RUGVED_DANI.jpg",
            },
            {
                name: "Namrata Devare",
                role: "CE Department Team Member",
                imageUrl:
                    "/team/2024-25/Dept/Namrata_photo - 2204_NAMRATA DEVARE.jpg",
            },
            {
                name: "Aboli Chormale",
                role: "ENTC Department Team Member",
                imageUrl: "/team/2024-25/Dept/Aboli_ENTCDepartment.jpg",
            },
            {
                name: "Ayush Kale",
                role: "ENTC Department Team Member",
                imageUrl:
                    "/team/2024-25/Dept/IMG_20241206_154234 - C_31_Ayush Kale.jpg",
            },
            {
                name: "Prashant Takale",
                role: "ENTC Department Team Member",
                imageUrl: "/team/2024-25/Dept/Prashant_ENTC_Department.jpg",
            },
            {
                name: "Shaikh Faraz",
                role: "IT Department Team Member",
                imageUrl: "/team/2024-25/Dept/Faraz_ItDepartmentTeam.jpg",
            },
            
            {
                name: "Prathamesh Jawahire",
                role: "IT Department Team Member",
                imageUrl:
                    "/team/2024-25/Dept/IMG_20241205_200036 - PRATHAMESH JAWAHIRE.jpg",
            },
            {
                name: "Prajakta Mandhere",
                role: "IT Department Team Member",
                imageUrl:
                    "/team/2024-25/Dept/IMG_20241213_140130 - PRAJAKTA MANDHARE.jpg",
            },
        ],
    },
    {
        teamName: "Documentation Team",
        members: [
            {
                name: "Rucha Patil",
                role: "Documentation Head",
                imageUrl: "/team/2024-25/Documentation/Rucha Patil.jpg",
            },
            {
                name: "Sanika Shinde",
                role: "Documentation Head",
                imageUrl: "/team/2024-25/Documentation/sanika shinde.jpg",
            },
            {
                name: "Srushti Chaudhari",
                role: "Documentation Team",
                imageUrl: "/team/2024-25/Documentation/Srushti_chaudhari.jpg",
            },
            {
                name: "Samruddhi Chaudhari",
                role: "Documentation Team",
                imageUrl: "/team/2024-25/Documentation/Samruddhi chaudhari.jpg",
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
                imageUrl: "/team/2024-25/finance/VinitThate.jpg",
            },
            {
                name: "Vivek Bhange",
                role: "Finance Team Member",
                imageUrl: "/team/2024-25/finance/Vivek_Bhange.jpg",
            },
        ],
    },
    {
        teamName: "Industry Relations Team",
        members: [
            {
                name: "Deepak Walunj",
                role: "Industry Relations Team Head",
                imageUrl: "/team/2024-25/IR/Deepak_IR_Head.jpg",
            },
            {
                name: "Sarvesh Pantoji",
                role: "Industry Relations Team Head",
                imageUrl: "/team/2024-25/IR/Sarvesh_IRHead.jpg",
            },
            {
                name: "Adhija Bachchav",
                role: "Team Member",
                imageUrl: "/team/2024-25/IR/Adhija_IRTeam.jpg",
            },
            {
                name: "Akshata Kadu",
                role: "Team Member",
                imageUrl:
                    "/team/2024-25/IR/AKSHATA KADU.jpg",
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
    {
        teamName: "Advisory Team",
        members: [
            {
                name: "Akash Kalshetti",
                role: "Advisory Member",
                imageUrl: "/team/2024-25/advisors/Akash.png",
                linkedinUrl: "https://www.linkedin.com/in/akash-kalshetti-27712b252",
            },
            {
                name: "Hrishikesh Mahajan",
                role: "Advisory Member",
                imageUrl: "/team/2024-25/advisors/Hrishikesh.png",
                linkedinUrl: "https://www.linkedin.com/in/hrishikesh-mahajan",
                githubUrl: "https://www.github.com/hrishikesh-mahajan",
            },
            {
                name: "Mayur Tingare",
                role: "Advisory Member",
                imageUrl: "/team/2024-25/advisors/Mayur.png",
                linkedinUrl: "https://www.linkedin.com/in/mayur-tingare-b2642122a",
            },
            {
                name: "Rahul Shelke",
                role: "Advisory Member",
                imageUrl: "/team/2024-25/advisors/Rahul.png",
                linkedinUrl: "https://www.linkedin.com/in/rahul-shelke-457841227",
            },
            {
                name: "Sahil Wagh",
                role: "Advisory Member",
                imageUrl: "/team/2024-25/advisors/Sahil.png",
                linkedinUrl: "https://www.linkedin.com/in/sahil-wagh-73b9a7240",
            },
        ],
    },
];
