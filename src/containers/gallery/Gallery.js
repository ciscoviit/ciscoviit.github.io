import React from 'react';
import './gallery.css';
import blog01 from "../../assets/Blog/blog01.JPG";
import blog02 from "../../assets/Blog/blog02.jpg";
import blog03 from "../../assets/Blog/blog03.JPG";
import blog04 from "../../assets/Blog/blog04.JPG";
import blog05 from "../../assets/Blog/blog05.JPG";

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
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1500">
              <img src={blog01} className="d-block w-75 gallery-img rounded" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="1500">
              <img src={blog02} className="d-block w-75 gallery-img rounded" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="1500">
              <img src={blog03} className="d-block w-75 gallery-img rounded" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="1500">
              <img src={blog04} className="d-block w-75 gallery-img rounded" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="1500">
              <img src={blog05} className="d-block w-75 gallery-img rounded" alt="..." />
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