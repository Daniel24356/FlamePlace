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
        <Reception first="Reception 24h / 7 Days" />
      </motion.div>
      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <Reception first="Reservation Online" />
      </motion.div>
    </section>
  );
};

export default Reservation;
