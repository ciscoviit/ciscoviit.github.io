import React from "react";
import "./TeamSection.css";


const TeamSection =({ image, sname, Tag, domain, linkedin, twitter, instagram})=>
{
    
    return(
        <div className="our-team rounded">
            
            <div className="picture">
                <img className="img-fluid" src={image} alt="" />   
            </div>
            <div>{Tag}</div>
            
            
            <div className="team-content">
                <h3 className="name">{sname}</h3>
                <h4 className="title">{domain}</h4>
            </div>
            
            <ul className="social">
                
                <li><a href={linkedin}><i className="fab fa-linkedin"></i></a></li>
                <li><a href={twitter}><i className="fab fa-twitter"></i></a></li>
                <li><a href={instagram}><i className="fab fa-instagram"></i></a></li>
            </ul>
        </div>
    );
};


export default TeamSection;
