import React from "react";
import "./TeamSection.css";


const TeamSection =({ image, sname, Tag,domain, github, linkedin, instagram})=>
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
                <li><a href={github} target="_blank" rel="noreferrer noopener" className="fab fa-linkedin" aria-hidden="true">a</a></li>
                <li><a href={linkedin} target="_blank" rel="noreferrer noopener" className="fab fa-twitter" aria-hidden="true">a</a></li>
                <li><a href={instagram} target="_blank" rel="noreferrer noopener" className="fab fa-instagram" aria-hidden="true">a</a></li>
            </ul>
        </div>
    );
};


export default TeamSection;
