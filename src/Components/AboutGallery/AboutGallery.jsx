import React from "react";
import "./AboutGallery.css";
import img from "../../assets/IMG_9638.jpg"
import img1 from "../../assets/image-1.jpg"
import img2 from "../../assets/barca.webp"
import img3 from "../../assets/barca.jpg"
import img4 from "../../assets/reception-1.jpeg"
import img5 from "../../assets/IMG_9691.jpg"
import img6 from "../../assets/security-2.jpeg"
import img7 from "../../assets/ukhotel.jpg"
import img8 from "../../assets/tahitihotel.jpg"

const AboutGallery = () => {
  return (
    <div className="about-gallery">
      {/* First Column (3 small images) */}
      <div className="col-1">
        <div className="about-gallery-item">
          <img src={img1} alt="Luxury Suite" />
          <div className="about-gallery-overlay">
            <span className="about-gallery-text">SnowDrop</span>
          </div>
        </div>
        <div className="about-gallery-item">
          <img src={img2} alt="Relaxing Spa" />
          <div className="about-gallery-overlay">
            <span className="about-gallery-text">Lounge</span>
          </div>
        </div>
        <div className="about-gallery-item">
          <img src={img3} alt="Gourmet Dining" />
          <div className="about-gallery-overlay">
            <span className="about-gallery-text">Main Building</span>
          </div>
        </div>
      </div>

      {/* Second Column (2 larger images) */}
      <div className="col-2">
        <div className="about-gallery-item">
          <img src={img4} alt="Infinity Pool" />
          <div className="about-gallery-overlay">
            <span className="about-gallery-text">Reception</span>
          </div>
        </div>
        <div className="about-gallery-item">
          <img src={img5} alt="Private Beach" />
          <div className="about-gallery-overlay">
            <span className="about-gallery-text">Bar</span>
          </div>
        </div>
      </div>

      {/* Third Column (3 small images) */}
      <div className="col-3">
        <div className="about-gallery-item">
          <img src={img6} alt="Sky Lounge" />
          <div className="about-gallery-overlay">
            <span className="about-gallery-text">Security Building</span>
          </div>
        </div>
        <div className="about-gallery-item">
          <img src={img7} alt="Fitness Center" />
          <div className="about-gallery-overlay">
            <span className="about-gallery-text">Daisy</span>
          </div>
        </div>
        <div className="about-gallery-item">
          <img src={img8} alt="Royal Suite" />
          <div className="about-gallery-overlay">
            <span className="about-gallery-text">Rose</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;
