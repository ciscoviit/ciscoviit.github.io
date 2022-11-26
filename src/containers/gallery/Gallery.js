import React from 'react';
import './gallery.css';
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";

const Gallery = () => {
  return (
    <>
    <br/>
    <br/>
      <center>

        <div id="carouselExampleInterval" className="carousel slide mb-5 my-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src={blog01} className="d-block w-75 gallery-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={blog02} className="d-block w-75 gallery-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={blog03} className="d-block w-75 gallery-img" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </center>
    </>
  )
}

export default Gallery