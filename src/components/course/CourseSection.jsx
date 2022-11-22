import React from "react";
import './CourseSection.css';

const CourseSection=({courseName,courseAbout,courseImage,courseText})=>
{
    return(
        <div className="course-card">
            <div className="course-img">
                <img src={courseImage} alt="...">
                </img>
            </div>
            <div className="card-body">
                <h5 className="course-name">{courseName}</h5>
                
                <h2 className="course-about">{courseAbout}</h2>
                <p className="card-text">
                    {courseText}
                </p>
            </div> 
            <div className="card-bottom">
                <button className="Btn">Read More</button>
            </div>  
        </div>
    );
};

export default CourseSection;
