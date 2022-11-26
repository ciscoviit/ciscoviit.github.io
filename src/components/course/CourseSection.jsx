import React from "react";
//import { Router } from "react-router-dom";
import { Router,Link} from 'react-router-dom';
import './CourseSection.css';

const CourseSection=({courseName,courseAbout,courseImage,courseText,courseTab})=>
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
                <a href={courseTab} target="_blank"  aria-hidden="true"><button className="Btn">Read More</button></a>
            </div>  
        </div>
    );
};

export default CourseSection;
