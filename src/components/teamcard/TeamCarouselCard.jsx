import React from "react";
import FadeIn from "react-fade-in";
import "./TeamCarouselCard.css";

const TeamInnerSection = ({
  image,
  Tag,
  Name,
  domain,
  linkedin,
  twitter,
  instagram,
}) => {
  return (
    <div className="our-team rounded">
      <FadeIn>
        <div className="picture">
          <img className="img-fluid" src={image} alt={Name} title={Name} />
        </div>
        <div>{Tag}</div>
        <div className="team-content">
          <h3 className="name">{Name}</h3>
          <h4 className="title">{domain}</h4>
        </div>
        <ul className="social">
          {linkedin && (
            <li>
              <a href={linkedin}>
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          )}
          {twitter && (
            <li>
              <a href={twitter}>
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          )}
          {instagram && (
            <li>
              <a href={instagram}>
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          )}
        </ul>
      </FadeIn>
    </div>
  );
};

export default TeamInnerSection;
