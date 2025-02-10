import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonProps from "../../Props/ButtonProps/ButtonProps";
import CheckProps from "../../Props/CheckProps/CheckProps";
import "./herosection.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import image1 from "../../assets/IMG_9725.jpg";
import image2 from "../../assets/IMG_9736.jpg";
import image3 from "../../assets/IMG_9734.jpg";
import image4 from "../../assets/IMG_9811.jpg";

const images = [image1, image2, image3, image4];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-sec">
        {/* Background Image with Smooth Fade Effect */}
        <motion.div
          className="hero-bg"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
          key={currentImage} // Ensure it updates correctly
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* Overlay */}
        <div className="overlay"></div>

        {/* Hero Content Animation */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="hero-div">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              LUXURY HOTEL & BEST RESORT
            </motion.p>
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                ENJOY A LUXURY
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                EXPERIENCE
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <ButtonProps label="ROOMS & SUITES" color="room-suites" />
            </motion.div>
          </div>

          {/* Check-in Section Animation */}
          <motion.div
            className="checkprop"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <div className="hero-check">
              <CheckProps
                checkText="CHECK-IN"
                dateText="03"
                secondColor="month-txt"
                monthDate="Feb"
                icon={<IoIosArrowDown />}
                color="check-me"
                firstColor="check-txt"
                thirdColor="date-txt"
              />
              <CheckProps
                checkText="CHECK-OUT"
                dateText="05"
                secondColor="month-txt"
                monthDate="Feb"
                icon={<IoIosArrowDown />}
                color="check-me"
                firstColor="check-txt"
                thirdColor="date-txt"
              />
              <CheckProps
                checkText="GUESTS"
                dateText="02"
                secondColor="month-txts"
                monthDate={<IoIosArrowUp />}
                icon={<IoIosArrowDown />}
                color="checks-me"
                firstColor="check-txt"
                thirdColor="date-txt"
              />
            </div>

            <motion.div
              className="check-available"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <p>CHECK</p>
              <p>AVAILABILITY</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
