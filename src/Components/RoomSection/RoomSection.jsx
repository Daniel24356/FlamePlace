import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import RoomsProps from "../../Props/RoomProps/roomprops";
import "./RoomSection.css";

const roomData = [
  { price: "20000", imgColor: "roomprops-div", name: "LOTUS" },
  { price: "20000", imgColor: "roompropss-div", name: "DAISY" },
  { price: "20000", imgColor: "roompropsss-div", name: "BLUEBELL" },
  { price: "20000", imgColor: "roompropssss-div", name: "ROSE" },
  { price: "30000", imgColor: "roompropsssss-div", name: "SNOWDROP" },
  { price: "30000", imgColor: "roompropssssss-div", name: "SNOWDROP" },
];

// Animation Variants (Defined Outside)
const getRoomVariants = (index, isMobile) => ({
  hidden: { opacity: 0, x: isMobile ? "-100vw" : 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  },
});

const RoomSection = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true });
  const isMobile = window.innerWidth < 768; // Check once (avoiding re-renders)

  useEffect(() => {
    const handleResize = () => {
      // Force a reflow only when necessary
      document.documentElement.style.setProperty(
        "--is-mobile",
        window.innerWidth < 768 ? "1" : "0"
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="room-sec" ref={ref}>
      {roomData.map((room, i) => (
        <motion.div
          key={room.name}
          className="room-container"
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={getRoomVariants(i, isMobile)}
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
