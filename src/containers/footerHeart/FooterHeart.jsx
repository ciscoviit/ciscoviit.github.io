import React from "react";
import "./FooterHeart.css";

const FooterHeart = () => {
    return (
        <div className="footer-heart-section">
            <p className="footer-heart">
                Made with <g-emoji className="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" /></g-emoji> by CiscoVIIT Team
            </p>
        </div>
    );
};

export default FooterHeart;