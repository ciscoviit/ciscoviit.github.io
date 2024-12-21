export type Course = {
    name: string;
    duration: string;
    thumbnailUrl: string;
    description: string;
    redirectUrl: string;
};

export type CourseCategory = {
    category: string;
    courses: Course[];
}

export const coursesOffered: CourseCategory[] = [
    {
        category: "CCNA Courses",
        courses: [
            {
                name: "CCNA: Module-1",
                duration: "70 hours",
                thumbnailUrl:
                    "https://ciscoviit.in/static/media/module1.8e64c838e3d8d4fbf57b.jpg",
                description: "Configure routers, switches, and end devices to provide access to local and remote network resources.",
                redirectUrl: "https://www.netacad.com/courses/networking/ccna-introduction-networks",
            },
            {
                name: "CCNA: Module-2",
                duration: "70 hours",
                thumbnailUrl:
                    "https://ciscoviit.in/static/media/module2.7e1b5b088a666b84bc10.jpg",
                description: "Focuses on switching technologies and router operations,including WLAN and security concepts.",
                redirectUrl: "https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials",
            },
            {
                name: "CCNA: Module-3",
                duration: "70 hours",
                thumbnailUrl:
                    "https://ciscoviit.in/static/media/module3.8e9d043c9bd1a4674c0b.jpg",
                description: "Describes the architectures related to designing, securing and operating enterprise networks.",
                redirectUrl: "https://www.netacad.com/courses/networking/ccna-enterprise-networking-security-automation",
            },
        ],
    },
    {
        category: "Self Paced Courses",
        courses: [
            {
                name: "Networking Essentials",
                duration: "Intermediate",
                thumbnailUrl:
                    "https://ciscoviit.in/static/media/NetworkingEssentials.05da8e3025a77fb7920d.jpg",
                description: "Learn basic networking concepts and skills you can put to use right away, no previous networking knowledge needed.",
                redirectUrl: "https://www.netacad.com/courses/networking/networking-essentials",
            },
            {
                name: "Network Security",
                duration: "Advance",
                thumbnailUrl:
                    "https://ciscoviit.in/static/media/NetworkSecurity.997ed186f8751f141119.jpg",
                description: "Develop skills needed to protect networks and prevent intrusions, understanding of network security.",
                redirectUrl: "https://www.netacad.com/courses/cybersecurity/network-security",
            },
            {
                name: "Introduction to Cyber Security",
                duration: "Beginner",
                thumbnailUrl:
                    "https://ciscoviit.in/static/media/cybersecurity.a709dafb0a3d17cc4e80.jpg",
                description: "Discover the world of cybersecurity and its impact.",
                redirectUrl: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
            },
            {
                name: "Introduction to IoT",
                duration: "Beginner",
                thumbnailUrl:
                    "https://ciscoviit.in/static/media/Iot.6fbc971e0659dfc45c4a.jpg",
                description: "Discover how the Internet of Things is enabling digital transformations across a variety of industries.",
                redirectUrl: "https://www.netacad.com/courses/iot/introduction-iot",
            },
            {
                name: "CyberSecurity Essentials",
                duration: "Intermediate",
                thumbnailUrl:
                    "https://ciscoviit.in/static/media/CyberEssentials.72a808a872b0bb9eacef.jpg",
                description: "Learn valuable security principles to defend networks, understand security controls for networks and servers.",
                redirectUrl: "https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials",
            },
            {
                name: "Cloud Security",
                duration: "Intermediate",
                thumbnailUrl:
                    "https://ciscoviit.in/static/media/CloudSecurity.c11972d813125dbee8ae.jpg",
                description: "Learn to design, build, and maintain a secure cloud environment, understanding of the full capabilities of cloud computing.",
                redirectUrl: "https://www.netacad.com/courses/cybersecurity/cloud-security",
            },
        ]
    }
];
