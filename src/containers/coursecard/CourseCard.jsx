import React from "react";
import './CourseCard.css';
import CourseSection from "../../components/course/CourseSection";

const CourseCard=()=>
{
    return(
        <section className="course-section" id="course">
            {/* Main Course */}
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">CCNA-Courses</h2>
                
                <div className="row justify-content-center">
                
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="CCNA: Module-1" courseAbout="52-weeks" courseImage={"https://i.ytimg.com/vi/UqYNV-OheOw/maxresdefault.jpg"} courseText="Learn basic networking concepts"/>    
                        
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Course-Name" courseAbout="Advance" courseImage={"https://static.vecteezy.com/system/resources/thumbnails/000/252/843/small/13.jpg"} courseText="Some quick example text to build on the card title and make up
                        the bulk of the card's content."/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Course-Name" courseAbout="Intermediate" courseImage={"https://i.ytimg.com/vi/i9quK-Mcikk/maxresdefault.jpg"} courseText="Some quick example text to build on the card title and make up
                        the bulk of the card's content."/>
                    </div>

                </div>
            </div>

            {/* SelfPaced-courses */}
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">Self paced-Courses</h2>
                
                <div className="row justify-content-center">
                
                <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Networking-Essentials" courseAbout="Beginner" courseImage={"https://rms.koenig-solutions.com/Sync_data/CCE_Logo//2981-cisco1.jpgL.jpg"} courseText="Learn basic networking concepts and skills you can put to use right away."/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Course-Name" courseAbout="Advance" courseImage={"https://static.vecteezy.com/system/resources/thumbnails/000/252/843/small/13.jpg"} courseText="Some quick example text to build on the card title and make up
                        the bulk of the card's content."/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Course-Name" courseAbout="Intermediate" courseImage={"https://static.vecteezy.com/system/resources/thumbnails/000/252/843/small/13.jpg"} courseText="Some quick example text to build on the card title and make up
                        the bulk of the card's content."/>
                    </div>

                </div>
            </div>

            {/* Advanced-course */}
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">Advanced-Courses</h2>
                
                <div className="row justify-content-center">
                
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="CCNA: Module-1" courseAbout="52-weeks" courseImage={"https://i.ytimg.com/vi/UqYNV-OheOw/maxresdefault.jpg"} courseText="Learn basic networking concepts,basic Network Connectivity and Communications"/>    
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Course-Name" courseAbout="Advance" courseImage={"https://static.vecteezy.com/system/resources/thumbnails/000/252/843/small/13.jpg"} courseText="Some quick example text to build on the card title and make up
                        the bulk of the card's content."/>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <CourseSection courseName="Course-Name" courseAbout="Intermediate" courseImage={"https://static.vecteezy.com/system/resources/thumbnails/000/252/843/small/13.jpg"} courseText="Some quick example text to build on the card title and make up
                        the bulk of the card's content."/>
                    </div>

                </div>
            </div>
                    
            
            
            
        </section>
    );
};

export default CourseCard;