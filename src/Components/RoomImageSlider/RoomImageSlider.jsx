import { useState } from "react";
import "./RoomImageSlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RoomImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      {/* Thumbnails on top of the main image */}
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="main-image">
        <img src={images[currentIndex]} alt={`Room ${currentIndex + 1}`} />
        <button className="nav-button left" onClick={goToPrevious}>
          <FaChevronLeft />
        </button>
        <button className="nav-button right" onClick={goToNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RoomImageSlider;
