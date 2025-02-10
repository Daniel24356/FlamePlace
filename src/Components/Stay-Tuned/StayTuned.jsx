import StayAround from "../../Props/StayAround/stayAround";
import StayWalk from "../../Props/StayWalk/stayWalk";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./StayTuned.css";
import resort from "../../assets/IMG_9715.jpg";

// Detect Mobile View
const isMobileView = () => window.innerWidth < 768;

const StayTuned = () => {
  const [isMobile, setIsMobile] = useState(isMobileView());

  useEffect(() => {
    const handleResize = () => setIsMobile(isMobileView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.3 },
    },
  };

  const headingBounce = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  const fadeSlide = {
    hidden: { opacity: 0, x: isMobile ? "-100vw" : 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { scale: 0.7, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", type: "spring", stiffness: 80 },
    },
  };

  return (
    <motion.section
      className="stayTuned-sec"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading Section with Bounce Effect */}
      <motion.div className="stayTuned-text-div" variants={headingBounce}>
        <p className="stay-hotel">HOTEL NEWS & EVENT</p>
        <h1>Stay Tuned</h1>
        <div>
          <p>Stay tuned for exciting events and activities at Fames Place, where unforgettable </p>
          <p>experiences await!</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div className="tuned-div" variants={containerVariants}>
        {/* Block 1 */}
        <motion.div className="tuned-me" variants={fadeSlide}>
          <StayAround first="New Activities" imgStyle="imagefirst" />
          <motion.img className="tune-imgs" src={resort} alt="" variants={scaleUp} />
          <div className="tune-display">
            <StayWalk first="Relax Zone" color="stayWalk-div" />
          </div>
        </motion.div>

        {/* Block 2 */}
        <motion.div className="tuned-me" variants={fadeSlide}>
          <motion.img className="tune-img" src={resort} alt="" variants={scaleUp} />
          <StayAround first="New Activities" imgStyle="imagesecond" />
          <div className="tune-display">
            <StayWalk first="Relax Zone" color="stayWalk-div" />
          </div>
        </motion.div>

        {/* Block 3 */}
        <motion.div className="tuned-me" variants={fadeSlide}>
          <div className="tuned-now">
            <StayWalk first="Relax Zone" color="stayWalk-div" />
            <StayWalk first="Daily Walk" color="stayWalk-divs" />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default StayTuned;
