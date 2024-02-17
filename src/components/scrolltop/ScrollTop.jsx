import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          padding: "0.5rem 1rem",
          fontSize: "20px",
          bottom: "70px",
          right: "30px",
          color: "#fff",
          textAlign: "center",
          borderRadius: "2rem",
          zIndex: 999,
        }}
      >
        {" "}
        {showTopBtn && (
          <FaAngleUp
            className="fa fa-arrow-up"
            style={{ fontSize: "20px", color: "DodgerBlue" }}
            onClick={goToTop}
          />
        )}{" "}
      </button>
    </div>
  );
};

export default ScrollTop;
