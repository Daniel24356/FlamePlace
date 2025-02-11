import { motion, useInView } from "framer-motion"; 
import { useState, useEffect, useRef } from "react";
import RoomsProps from "../../Props/RoomProps/roomprops";
import "./RoomSection.css";

const RoomSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true }); // Trigger animation once for better performance

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define animation variants outside the render to prevent re-computing
  const getRoomVariants = (index) => ({
    hidden: { opacity: 0, x: isMobile ? "-100vw" : 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <section className="room-sec" ref={ref}>
      {[
        { price: "30000", imgColor: "roomprops-div", name: "SNOWDROP" },
        { price: "20000", imgColor: "roompropss-div", name: "DAISY" },
        { price: "20000", imgColor: "roompropsss-div", name: "BLUEBELL" },
        { price: "20000", imgColor: "roompropssss-div", name: "RISE" },
        { price: "30000", imgColor: "roompropsssss-div", name: "SNOWDROP" },
        { price: "30000", imgColor: "roompropssssss-div", name: "SNOWDROP" },
      ].map((room, i) => (
        <motion.div
          key={room.name}
          className="room-container"
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={getRoomVariants(i)}
        >
          <RoomsProps 
            first={room.price} 
            imgColor={room.imgColor} 
            second={room.name} 
            third="2 GUESTS" 
            color="room-black" 
          />
        </motion.div>
      ))}
    </section>
  );
};

export default RoomSection;
