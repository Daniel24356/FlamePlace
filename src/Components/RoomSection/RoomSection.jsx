import { motion } from "framer-motion"; 
import { useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";
import RoomsProps from "../../Props/RoomProps/roomprops";
import "./RoomSection.css";

const RoomSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const roomVariants = {
    hidden: { opacity: 0, x: isMobile ? "-100vw" : 50 }, // Slide in from left on mobile
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
      <section className="room-sec">
        {[
          { price: "FROM 22500", imgColor: "roomprops-div", name: "LOTUS" },
          { price: "FROM 23000", imgColor: "roompropss-div", name: "DAISY" },
          { price: "FROM 25000", imgColor: "roompropsss-div", name: "BLUEBELL" },
          { price: "FROM 21000", imgColor: "roompropssss-div", name: "RISE" },
          { price: "FROM 20500", imgColor: "roompropsssss-div", name: "SNOWDROP" },
          { price: "FROM 22000", imgColor: "roompropssssss-div", name: "LOTUS" },
        ].map((room, i) => (
          <motion.div
            key={room.name}
            className="room-container"
            custom={i}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={roomVariants}
          >
            <RoomsProps 
              first={room.price} 
              imgColor={room.imgColor} 
              second={room.name} 
              third="2 GUESTS" 
              fourth="23 FT" 
              color="room-black" 
            />
          </motion.div>
        ))}
      </section>
    </ScrollTrigger>
  );
};

export default RoomSection;
