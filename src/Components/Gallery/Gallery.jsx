import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Gallery.css"
import img1 from "../../assets/IMG_9725.jpg"
import img2 from "../../assets/IMG_9691.jpg"
import img3 from "../../assets/IMG_9603.jpg"
import img4 from "../../assets/IMG_9600.jpg"
import img5 from "../../assets/IMG_9586.jpg"
import img6 from "../../assets/IMG_9736.jpg"
import img7 from "../../assets/IMG_9593.jpg"
import img8 from "../../assets/IMG_9595.jpg"
import img9 from "../../assets/IMG_9682.jpg"
import img10 from "../../assets/IMG_9715.jpg"
import img11 from "../../assets/IMG_9619.jpg"
import img12 from "../../assets/IMG_9710.jpg"


const Gallery = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 }, // Changed back to 3
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        tablet: { breakpoint: { max: 649, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      };

  const ButtonGroup = ({ next, previous, carouselState }) => {
    const { currentSlide, totalItems, slidesToShow } = carouselState;
    
    return (
      <div className="button-group">
        <button
          className="custom-arrow left"
          onClick={previous}
          disabled={currentSlide === 0} // Disable on first slide
        >
          <FaChevronLeft size={30} />
        </button>
        <button
          className="custom-arrow right"
          onClick={next}
          disabled={currentSlide + slidesToShow >= totalItems} // Disable on last slide
        >
          <FaChevronRight size={30} />
        </button>
      </div>
    );
  };

  return (
    <section className="skill" id="skills">
      <div className="skill-bx">
        <h2>Our Gallery</h2>
        <Carousel
          responsive={responsive}
          infinite={false} // No infinite looping
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={true}
          arrows={false}
          swipeable={true}
          draggable={true}
          className="skill-slider"
        >
          <div className="item">
            <img src={img1} alt="Web Development" />
          </div>
          <div className="item">
            <img src={img6} alt="Brand Identity" />
          </div>
          <div className="item">
            <img src={img10} alt="Logo Design" />
          </div>
          <div className="item">
            <img src={img9} alt="UI/UX Design" />
          </div>
          <div className="item">
            <img src={img8} alt="Brand Identity" />
          </div>
          <div className="item">
            <img src={img3} alt="Logo Design" />
          </div>
          <div className="item">
            <img src={img4} alt="UI/UX Design" />
          </div>
          <div className="item">
            <img src={img11} alt="UI/UX Design" />
          </div>
          <div className="item">
            <img src={img5} alt="UI/UX Design" />
          </div>
          <div className="item">
            <img src={img7} alt="UI/UX Design" />
          </div>
          <div className="item">
            <img src={img12} alt="UI/UX Design" />
          </div>
          <div className="item">
            <img src={img2} alt="UI/UX Design" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
