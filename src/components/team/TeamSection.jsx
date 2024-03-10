import React from "react";
import TeamInnerSection from "./TeamInnerSection";

const TeamSection = ({
  image,
  Tag,
  Name,
  domain,
  linkedin,
  twitter,
  instagram,
}) => {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <TeamInnerSection
        image={image}
        Tag={Tag}
        Name={Name}
        domain={domain}
        linkedin={linkedin}
        twitter={twitter}
        instagram={instagram}
      />
    </div>
  );
};

export default TeamSection;
