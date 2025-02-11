import Reception from "../../Props/ReceptionProps/Reception";
import { motion } from "framer-motion";
import "./reservation.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Reservation = () => {
  return (
    <section className="reservation-sec">
      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Reception first="Reception 24h / 7 Days" second="Our warm and inviting reception" third="team is available 24/7" />
      </motion.div>
      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <Reception first="Reservation Online" second="Book your stay effortlessly with" third="our seamless online reservation system" />
      </motion.div>
    </section>
  );
};

export default Reservation;
