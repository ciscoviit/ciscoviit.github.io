import React from "react";
import './CourseCard.css';
import CourseSection from "../../components/course/CourseSection";
import module3 from "../../assets/module3.jpg";
import module2 from "../../assets/module2.jpg";
import module1 from "../../assets/module1.jpg";
import NetworkingEssentials from "../../assets/NetworkingEssentials.jpg";
import NetworkSecurity from "../../assets/NetworkSecurity.jpg";
import cybersecurity from "../../assets/cybersecurity.jpg";
import Iot from "../../assets/Iot.jpg";
import CyberEssentials from "../../assets/CyberEssentials.jpg";
import CloudSecurity from "../../assets/CloudSecurity.jpg";
import CCIE from "../../assets/CCIE.jpg";
import CcieSecurity from "../../assets/CcieSecurity.jpg";
import CCNP from "../../assets/CCNP.jpg";


const CourseCard=()=>
{
    return(
        <section className="course-section" id="course">
            {/* Main Course */}
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">CCNA-Courses</h2>
                
                <div className="row justify-content-center">
                
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="CCNA: Module-1" courseAbout="70 Hrs" courseImage={module1} courseText="Configure routers, switches, and end devices to provide access to local and remote network resources." courseTab="https://www.netacad.com/courses/networking/ccna-introduction-networks"/>    
                        
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="CCNA: Module-2" courseAbout="70 Hrs" courseImage={module2} courseText="Focuses on switching technologies and router operations,including WLAN and security concepts." courseTab="https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials"/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="CCNA: Module-3" courseAbout="70 Hrs" courseImage={module3} courseText="Describes the architectures related to designing, securing and operating enterprise networks." courseTab="https://www.netacad.com/courses/networking/ccna-enterprise-networking-security-automation"/>
                    </div>

                </div>
            </div>

            {/* SelfPaced-courses */}
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">Self paced-Courses</h2>
                
                <div className="row justify-content-center">
                
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Networking-Essentials" courseAbout="Intermediate" courseImage={NetworkingEssentials} courseText="Learn basic networking concepts and skills you can put to use right away, no previous networking knowledge needed." courseTab="https://www.netacad.com/courses/networking/networking-essentials"/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Network Security" courseAbout="Advanced" courseImage={NetworkSecurity} courseText="Develop skills needed to protect networks and prevent intrusions, understanding of network security." courseTab="https://www.netacad.com/courses/cybersecurity/network-security"/>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Introduction to Cybersecurity" courseAbout="Beginning" courseImage={cybersecurity} courseText="Discover the world of cybersecurity and its impact." courseTab="https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity"/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Introduction to IoT" courseAbout="Beginning" courseImage={Iot} courseText="Discover how the Internet of Things is enabling digital transformations across a variety of industries." courseTab="https://www.netacad.com/courses/iot/introduction-iot"/>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Cybersecurity-Essentials" courseAbout="Intermediate" courseImage={CyberEssentials} courseText="Learn valuable security principles to defend networks, understand security controls for networks and servers." courseTab="https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials"/>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Cloud Security" courseAbout="Intermediate" courseImage={CloudSecurity} courseText="Learn to design, build, and maintain a secure cloud environment, understanding of the full capabilities of cloud computing." courseTab="https://www.netacad.com/courses/cybersecurity/cloud-security"/>
                    </div>

                </div>
            </div>

            {/* Advanced-course */}
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">Expert-Certifications</h2>
                
                <div className="row justify-content-center">
                
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="CCIE Routing & Switching" courseAbout="Advance" courseImage={CCIE} courseText="Certifies the skills required of expert-level network engineers to plan, operate and troubleshoot complex networks." courseTab="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert/ccie-enterprise-infrastructure.html"/>    
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="CCIE Security" courseAbout="Advance" courseImage={CcieSecurity} courseText="Covers core security technologies, and a hands-on and solutions through the entire network lifecycle." courseTab="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert/ccie-security-v2.html"/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="CCNP Routing & Switching" courseAbout="Advance" courseImage={CCNP} courseText="Configure and manage the networks of the largest companies in the world, scale and maintain enterprise networks." courseTab="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise.html"/>
                    </div>

                </div>
            </div>
            
            <div class="text-center p-3">
                <p>Made with <i class="fa fa-heart pulse"></i> By CiscoViiT</p>
            </div>
            
        </section>
    );
};

export default CourseCard;