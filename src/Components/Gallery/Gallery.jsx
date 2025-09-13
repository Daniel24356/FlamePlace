import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Gallery.css";
import img1 from "../../assets/image-1.jpg";
import img2 from "../../assets/francehotel.jpg";
import img3 from "../../assets/room-1.jpeg";
import img4 from "../../assets/tahitihotel.jpg";
import img5 from "../../assets/ukhotel.jpg";
import img6 from "../../assets/image-2.jpg";
import img7 from "../../assets/img-26.jpeg";
import img8 from "../../assets/tokyo.jpg";
import img9 from "../../assets/resort1.jpg";
import img10 from "../../assets/resort3.jpg";
import img11 from "../../assets/malawi.jpg";
import img12 from "../../assets/mauritius.jpg";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const images = [img1, img6, img10, img9, img8, img3, img4, img11, img5, img7, img12, img2];

// Animation Variants (Defined Outside)
const fadeInVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Gallery = () => {
  const isHovered = useRef(false);
  const [hoverState, setHoverState] = useState(false); // Controls animation without re-rendering too often

  const handleMouseEnter = useCallback(() => {
    isHovered.current = true;
    setHoverState(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHovered.current = false;
    setHoverState(false);
  }, []);

  const ButtonGroup = ({ next, previous, carouselState }) => {
    const { currentSlide, totalItems, slidesToShow } = carouselState;

    return (
      <motion.div
        className="button-group"
        animate={{ opacity: hoverState ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <button className="custom-arrow left" onClick={previous} disabled={currentSlide === 0}>
          <FaChevronLeft size={30} />
        </button>
        <button
          className="custom-arrow right"
          onClick={next}
          disabled={currentSlide + slidesToShow >= totalItems}
        >
          <FaChevronRight size={30} />
        </button>
      </motion.div>
    );
  };

  return (
    <section className="skill" id="gallery">
      <div className="skill-bx">
        <h2>Our Gallery</h2>
        <div className="carousel-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customButtonGroup={<ButtonGroup />}
            renderButtonGroupOutside={true}
            arrows={false}
            swipeable={true}
            draggable={true}
            className="skill-slider"
          >
            {images.map((image, i) => (
              <motion.div key={i} className="item" variants={fadeInVariant} initial="hidden" whileInView="show">
                <img src={image} alt={`Gallery ${i}`} />
              </motion.div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
